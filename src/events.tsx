import React, { useState } from 'react';
import './events.css';

const eventsData = [
  { id: 1, type: 'Open Mic', title: 'Open Mic Night', date: 'August 1, 2025', recurring: true },
  { id: 2, type: 'Art Show', title: 'Local Art Exhibit', date: 'August 2, 2025', recurring: false },
  { id: 3, type: 'Community', title: 'Community Meetup', date: 'August 3, 2025', recurring: false },
  { id: 4, type: 'Trivia Night', title: 'Disney Trivia', date: 'August 8, 2025', recurring: true },
  { id: 5, type: 'Open Mic', title: 'Open Mic Night', date: 'August 15, 2025', recurring: true }
];

function Events() {
  const [view, setView] = useState<'list' | 'calendar'>('list');
  const [filter, setFilter] = useState<string>('all');

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const filteredEvents = eventsData.filter(event =>
    filter === 'all' ? true : event.type === filter
  );

  return (
    <div className="events-page">
      <h1>Events</h1>
      <div className="event-controls">
        <div className="view-toggle">
          <button className={view === 'list' ? 'active' : ''} onClick={() => setView('list')}>List View</button>
          <button className={view === 'calendar' ? 'active' : ''} onClick={() => setView('calendar')}>Calendar View</button>
        </div>
        <div className="filter">
          <label htmlFor="event-filter">Filter by Type:</label>
          <select id="event-filter" value={filter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="Open Mic">Open Mic</option>
            <option value="Art Show">Art Show</option>
            <option value="Community">Community</option>
            <option value="Trivia Night">Trivia Night</option>
          </select>
        </div>
      </div>
      <div className="events-container">
        {view === 'list' ? (
          <ul className="event-list">
            {filteredEvents.map(event => (
              <li key={event.id} className={`event-item ${event.recurring ? 'recurring' : ''}`}>
                <h3>{event.title}</h3>
                <p>Type: {event.type}</p>
                <p>Date: {event.date}</p>
                <button className="btn calendar">Add to Calendar</button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="calendar-view">
            <p>Calendar Integration Coming Soon...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;