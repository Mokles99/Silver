import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="text-white" id="contact">
      <h2 className="text-3xl font-bold mb-8 text-center tracking-w">Contact Us</h2>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col items-center p-8 m-2 w-72 rounded-xl bg-gradient-to-br from-gray-500 to-black">
          <FaClock className="text-[#5ce1e6] text-4xl mb-4" />
          <h4 className="text-2xl mb-2">Open Hours</h4>
          <span className="font-semibold text-gray-400 text-lg mb-4">
            Monday - Friday
            <br />
            9:00AM - 05:00PM
          </span>
        </div>

        <div className="flex flex-col items-center p-8 m-2 w-72 rounded-xl bg-gradient-to-br from-gray-500 to-black">
          <FaMapMarkerAlt className="text-[#5ce1e6] text-4xl mb-4" />
          <h4 className="text-2xl mb-2">Address</h4>
          <span className="font-semibold text-gray-400 text-lg mb-4">
            Rue du Commandan <br />
            Bejaoui _ Sousse
          </span>
        </div>

        <div className="flex flex-col items-center p-8 m-2 w-72 justify-end rounded-xl bg-gradient-to-br from-gray-500 to-black">
          <FaEnvelope className="text-[#5ce1e6] text-4xl mb-4" />
          <h4 className="text-2xl mb-2">Email</h4>
          <span className="font-semibold text-gray-400 text-lg mb-4">
            mokles.benali900@outlook.com
          </span>
        </div>

        <div className="flex flex-col items-center p-8 m-2 w-72 justify-end rounded-xl bg-gradient-to-br from-gray-500 to-black">
          <FaPhone className="text-[#5ce1e6] text-4xl mb-4" />
          <h4 className="text-2xl mb-2">Call us</h4>
          <span className="font-semibold text-gray-400 text-lg mb-4">
            +216 22 46 10 46
          </span>
        </div>
      </div>
    </div>
  );
};
export default Contact;
