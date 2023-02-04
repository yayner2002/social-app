import React from 'react'

import './Map.css';

const Map = () => {

  return (
    <div
      className="map"
    >
      <iframe width="100%" title='addis ababa map' height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Bole,%20Ring%20Road%20Airport%20Street%20Addis%20Ababa+(Addis%20Ababa)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

    </div>
  );
};

export default Map;
