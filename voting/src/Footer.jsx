// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        {/* <div className="flex justify-center mb-4">
          <a href="/aboutUs" className="mx-2 hover:text-gray-400">About Us</a>
          <a href="/contactUs" className="mx-2 hover:text-gray-400">Contact Us</a>
          <a href="/services" className="mx-2 hover:text-gray-400">Services</a>
        </div> */}
        <p>&copy; {new Date().getFullYear()} E-Voting System. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
