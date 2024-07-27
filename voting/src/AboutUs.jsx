import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import Footer from "./Footer"; // Import the Footer component

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar /> {/* Add the Navbar here */}
      <div className="container mx-auto px-6 mt-20"> {/* Added mt-20 for spacing */}
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-gray-600 mt-4">
            At [Your Company Name], we are dedicated to revolutionizing the way people vote by providing a secure, user-friendly, and reliable online voting platform. Founded with the vision of enhancing democratic processes, our mission is to ensure that every individual has an equal opportunity to voice their opinion in a safe and accessible environment.
            <br /><br />
            Our team comprises passionate professionals from diverse backgrounds, all committed to the common goal of making voting more transparent, secure, and inclusive. We leverage cutting-edge technology and robust security measures to protect voter integrity and maintain the confidentiality of every vote cast on our platform.
            <br /><br />
            We believe that the power of democracy lies in the participation of its people. By simplifying the voting process and making it accessible from anywhere in the world, we aim to increase voter turnout and foster a more engaged and informed citizenry. Our platform is designed with the user in mind, offering a seamless and intuitive experience that caters to all demographics.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to make voting accessible and ensure every voice is heard. Our diverse team is dedicated to enhancing democratic processes through cutting-edge technology and robust security measures.
            <br /><br />
            We believe democracy thrives on participation. By simplifying voting and making it accessible from anywhere, we aim to increase voter turnout and foster an engaged citizenry. Our intuitive platform caters to all demographics, ensuring a seamless voting experience.
          </p>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
              <p className="text-gray-600 mt-4">
                John is the visionary behind our platform, with a passion for technology and innovation.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
              <p className="text-gray-600 mt-4">
                Jane is the technical mastermind ensuring our platform is secure and reliable.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
              />
              <h3 className="text-xl font-semibold text-gray-800">Michael Johnson</h3>
              <p className="text-gray-600">Head of Marketing</p>
              <p className="text-gray-600 mt-4">
                Michael is the creative force driving our marketing and outreach efforts.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer className="mt-0" /> {/* Add the Footer here with no margin */}
    </div>
  );
}
