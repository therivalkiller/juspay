// src/components/Activities.jsx

import React from 'react';

const Activities = () => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4">Activities</h2>
      <ul>
        <li className="mb-3">You have a bug that needs attention (just now)</li>
        <li className="mb-3">Released a new version (59 minutes ago)</li>
        <li className="mb-3">Submitted a bug (12 hours ago)</li>
        <li className="mb-3">Modified a data in Page X (Today, 11:59 AM)</li>
        <li>Deleted a page in Project X (Feb 2, 2023)</li>
      </ul>
    </div>
  );
};

export default Activities;
