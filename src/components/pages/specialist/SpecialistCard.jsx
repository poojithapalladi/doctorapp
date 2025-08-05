import React from 'react';
import { Link } from 'react-router-dom';

const SpecialistCard = ({ img, title, totalDoctors }) => {
  return (
    <Link
      to="/specialists"
      className="w-full max-w-[170px] bg-[#F5F7FA] rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-md transition duration-300"
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-[#E2E8F0] flex items-center justify-center mb-3">
        <img src={img} alt={title} className="w-8 h-8 object-contain" />
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-xs text-gray-500 mb-3">{totalDoctors} Doctors</p>

      {/* Button */}
      <button className="w-full text-sm bg-blue-500 text-white rounded-lg py-1 font-medium hover:bg-blue-600 transition">
        Read More
      </button>
    </Link>
  );
};

export default SpecialistCard;
