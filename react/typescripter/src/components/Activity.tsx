import React, { useEffect, useState } from 'react';

import events, { eventEmitter } from '../lib/events';
import { ActivityEvent } from '../lib/types';

function Activity() {
  const [notes, setNotes] = useState<ActivityEvent[]>([]);

  const listener = (note: ActivityEvent) => {
    setNotes([...notes, note]);
  };

  // TODO: make useEvent hook for events
  useEffect(() => {
    eventEmitter.on(events.NOTIFICATION, listener);

    return () => {
      eventEmitter.off(events.NOTIFICATION, listener);
    };
  }, [listener]);

  return (
    <>
      <h4>Activity</h4>
      {notes.length > 0 ? notes.map((_: ActivityEvent) => (
        <div key={_.content} style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ marginBottom: 10 }} title={_.content}>
            {_.type?.split('/').join(' ').toUpperCase()}
            {' @ '}
            <span>{_.created?.toLocaleTimeString()}</span>
          </span>
        </div>
      )) : <p>No recent activity.</p>}
    </>
  );
}

export default Activity;
