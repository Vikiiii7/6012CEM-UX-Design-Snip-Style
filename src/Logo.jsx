import React from 'react';

function Logo() {

    const imageSource = require('./assets/group8975.png');


  return (
    <div className="logo">
      <img src={imageSource} style={{ width: 100, height: 100 }} />
    </div>
  );
}

export default Logo;