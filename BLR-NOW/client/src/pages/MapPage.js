import React, { useState } from 'react';
import EventMap from '../components/EventMap';
import CreateEvent from '../components/CreateEvent';

function MapPage() {
  const [events, setEvents] = useState([]);

  return (
    <div>
      <div className="map-page-container">
        <div className="map-sidebar">
          <CreateEvent onEventCreated={() => {
            setEvents([]); 
          }} />
        </div>
        <div className="map-main">
          <EventMap events={events} setEvents={setEvents} />
        </div>
      </div>
    </div>
  );
}

export default MapPage;