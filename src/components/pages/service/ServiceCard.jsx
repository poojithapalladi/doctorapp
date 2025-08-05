import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ img, title, desc }) => {
  return (
    <Link
      to="/services"
      className="w-full max-w-[180px] bg-white border border-neutral-200 rounded-xl p-4 flex flex-col items-center text-center hover:shadow-md transition"
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-[#F0F4F8] flex items-center justify-center mb-3">
        <img src={img} alt={title} className="w-8 h-8 object-contain" />
      </div>

      {/* Title */}
      <h2 className="text-sm font-semibold text-blue-500 mb-1">{title}</h2>

      {/* Description */}
      <p className="text-xs text-neutral-500 line-clamp-2">{desc}</p>
    </Link>
  );
};

export default ServiceCard;
