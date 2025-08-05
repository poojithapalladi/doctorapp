import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { LiaTimesSolid } from 'react-icons/lia';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/doctors", label: "Doctors" },
    { href: "/blogs", label: "Blogs" },
  ];

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="w-full h-[8ch] bg-neutral-50 flex items-center md:flex-row lg:px-32 md:px-16 sm:px-8 px-4 border-b border-neutral-200  z-50">
      {/* Logo */}
      <Link to="/" className="text-2xl text-blue-500 font-bold mr-16 flex items-center">
        Doctor
      </Link>

      {/* Toggle for mobile */}
      <button
        onClick={handleClick}
        className="lg:hidden ml-auto text-neutral-600"
      >
        {open ? <LiaTimesSolid className="text-xl" /> : <FaBars className="text-xl" />}
      </button>

      {/* Nav links + Button */}
      <div
        className={`${
          open
            ? 'flex absolute top-16 left-1/2 -translate-x-1/2 w-[95%] flex-col p-4 bg-white border border-neutral-200 shadow-md rounded-md'
            : 'hidden'
        } md:flex md:flex-row md:items-center md:gap-x-7 md:ml-auto md:static md:translate-x-0 md:p-0 md:shadow-none md:border-none`}
      >
        {/* Nav items */}
        <ul className="flex flex-col md:flex-row gap-4 md:gap-x-7 text-base text-neutral-600 font-medium">
          {navLinks.map((nav, index) => (
            <li key={index}>
              <Link to={nav.href} className="hover:text-blue-500 transition">
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Appointment Button */}
        <div className="mt-4 md:mt-0 md:ml-6">
          <button className="px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition duration-300">
            Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
