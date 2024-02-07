import React from 'react';

function CompanyLogo({ imagePath }) {
    console.log(imagePath)
  return (
    // <div className="company-logo" style={{ background: `url(${imagePath}), lightgray 50% / cover no-repeat` }}></div>
    <img className="company-logo company-l1" src={imagePath}/>
  );
}

export default CompanyLogo;