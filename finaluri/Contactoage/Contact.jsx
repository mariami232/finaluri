import React from 'react';
import MapComponent from '../components/MapComponent';
import ContactComponent from '../components/ContactComponent';

const Contact = () => {
  return (
    <div>
      <h1>About Page</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
          <MapComponent />
        </div>
        <div style={{ flex: 1, marginLeft: '20px' }}>
          <ContactComponent />
        </div>
      </div>
    </div>
  );
};

export default Contact;
