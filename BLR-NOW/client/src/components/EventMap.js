import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import axios from 'axios';

// Bengaluru's coordinates
const BENGALURU_CENTER = [12.9716, 77.5946];

// Component to fetch events based on map center
function EventFetcher({ setEvents }) {
  const map = useMap();

  const fetchEvents = () => {
    const { lat, lng } = map.getCenter();
    // Fetch events near the center of the map
    axios.get(`http://localhost:5000/api/events?lat=${lat}&lng=${lng}`)
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => console.error('Error fetching events', error));
  };

  useEffect(() => {
    fetchEvents(); // Fetch on initial load
    map.on('moveend', fetchEvents); // Fetch when map stops moving

    return () => {
      map.off('moveend', fetchEvents);
    };
  }, [map, setEvents]);

  return null;
}

function EventMap({ events, setEvents }) {
  return (
    <MapContainer center={BENGALURU_CENTER} zoom={13} style={{ height: '80vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <EventFetcher setEvents={setEvents} />

      {/* Map over the events and create a Marker for each */}
      {events.map(event => (
        <Marker
          key={event._id}
          position={[event.location.coordinates[1], event.location.coordinates[0]]} // [lat, lng]
        >
          <Popup>
            {/* This matches your wireframe [cite: 49-51] */}
            <strong>{event.title}</strong><br />
            {event.description}<br />
            Category: {event.category}<br />
            Date: {new Date(event.date).toLocaleString()}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default EventMap;