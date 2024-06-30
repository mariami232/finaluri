import React from 'react';
import MapComponent from '../components/MapComponent';
import ContactComponent from '../components/ContactComponent';
import SmallInfoComponent from '../components/SmallInfoComponent';

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      
      {/* Small information section */}
      <SmallInfoComponent />
      
      {/* Map and Contact section */}
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

export default AboutPage;
