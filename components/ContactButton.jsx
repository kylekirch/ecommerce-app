import React from 'react';
import './component_src/css/contact-button.css'; // Corrected path

function ContactButton({ buttonText, imgURL }) {
  console.log('imgURL in ContactButton:', imgURL); // Should log "/_next/static/media/marky_edited.10f16ecd.png"
  return (
    <a href="#" className="contact-button">
      <p id="text">{buttonText}</p>
      <div
        id="image"
        style={{
          backgroundImage: `url(${imgURL})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          width: '50px',
          height: '50px',
          margin: '10px 0px',
        }}
      ></div>
    </a>
  );
}

export default ContactButton;