// src/PrintableResume.js

import React from 'react';

const PrintableResume = ({ personalInfo }) => {
  return (
    <div>
      <h2>Printable Resume</h2>
      <p>{personalInfo.name}</p>
      <p> {personalInfo.email}</p>
      <p>{personalInfo.address}</p>
      {/* Add other sections (education, experience, skills) as needed */}
    </div>
  );
};

export default PrintableResume;
