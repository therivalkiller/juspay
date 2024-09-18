// src/components/Notifications.jsx

import React from 'react';

const Notifications = () => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4">Notifications</h2>
      <ul>
        <li className="mb-3">You have a bug that needs attention (just now)</li>
        <li className="mb-3">New user registered (59 minutes ago)</li>
        <li className="mb-3">You have a bug that needs attention (12 hours ago)</li>
        <li>Andi Lane subscribed to you (Today, 11:59 AM)</li>
      </ul>
    </div>
  );
};

export default Notifications;
