import React from "react";

export const Footer = () => {
  return (
    <div className="bg-[#1C1C1C] text-gray-300 mt-10 py-12 px-5 sm:px-10 md:px-20">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Company Information */}
          <div className="space-y-4">
            <h2 className="text-white text-4xl font-bold">Swiggy</h2>
            <p className="text-sm">
              Swiggy is India's premier online food ordering and delivery service. Offering a seamless experience,
              we deliver food right to your doorstep.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-orange-500 hover:text-gray-400 transition duration-300">
                <i className="fab fa-facebook-f text-4xl"></i>
              </a>
              <a href="#" className="text-orange-500 hover:text-gray-400 transition duration-300">
                <i className="fab fa-twitter text-4xl"></i>
              </a>
              <a href="#" className="text-orange-500 hover:text-gray-400 transition duration-300">
                <i className="fab fa-instagram text-4xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h2 className="text-white text-xl font-semibold">Quick Links</h2>
            <ul className="text-sm space-y-3">
              <li>
                <a href="#" className="hover:text-orange-500 transition duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition duration-300">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition duration-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-orange-600 text-xl font-semibold">Contact Us</h2>
            <p className="text-sm">Email: <a href="mailto:support@swiggy.com" className="text-gray-400 hover:text-orange-500">support@swiggy.com</a></p>
            <p className="text-sm">Phone: +91-123-456-7890</p>
            <p className="text-sm">Address: 123 Food Street, Jodhpur, India</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Swiggy. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <img
              src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
              alt="Swiggy Logo"
              className="w-24 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
