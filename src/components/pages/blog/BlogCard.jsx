import React from "react";
import { FiChevronsRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const BlogCard = ({ img, title, desc }) => {
  return (
    <div className="w-full bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden transition-transform hover:scale-105 duration-300 ease-in-out">
      {/* Blog Image */}
      <img
        src={img}
        alt="blog img"
        className="w-full aspect-[4/3] object-cover object-center"
      />

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <Link to="/blogs" className="block text-lg text-neutral-800 font-semibold leading-tight hover:underline">
          {title}
        </Link>

        {/* Description */}
        <p className="text-sm text-neutral-600 font-normal leading-relaxed line-clamp-2">
          {desc}
        </p>

        {/* Read More */}
        <Link
          to="/blogs"
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          Read More
          <FiChevronsRight className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
