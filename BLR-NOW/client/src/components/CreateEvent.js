import React, { useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { useAuth } from '../context/AuthContext'; // Import useAuth

// ... (LocationPicker component is unchanged)
function LocationPicker({ setLocation }) {
  const [position, setPosition] = useState(null);
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      setLocation(e.latlng); 
    },
  });
  return position === null ? null : <Marker position={position}></Marker>;
}


function CreateEvent({ onEventCreated }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Sports');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState(null);
  const { token } = useAuth(); // Get the token

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!location) {
      alert('Please pick a location on the map');
      return;
    }

    const newEvent = {
      title, description, category, date,
      latitude: location.lat,
      longitude: location.lng,
    };

    try {
      // Set up headers with the token
      const config = {
        headers: {
          'x-auth-token': token,
        },
      };

      await axios.post('http://localhost:5000/api/events', newEvent, config);

      alert('Event Created!');
      setTitle('');
      setDescription('');
      setDate('');
      setLocation(null);
      onEventCreated();
    } catch (error) {
      console.error('Error creating event', error.response?.data?.msg || error.message);
      alert('Failed to create event. Are you logged in?');
    }
  };

  return (
    <div className="create-event-form">
      <h3>Create an Event</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Sports">Sports</option>
            <option value="Music">Music</option>
            <option value="Study">Study</option>
            <option value="Art">Art</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date & Time:</label>
          <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Location: (Click map to pick)</label>
          <MapContainer center={[12.9716, 77.5946]} zoom={12} style={{ height: '200px', width: '100%', borderRadius: '8px' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LocationPicker setLocation={setLocation} />
          </MapContainer>
        </div>
        <button type="submit" className="btn btn-primary">[PUBLISH EVENT]</button>
      </form>
    </div>
  );
}

export default CreateEvent;