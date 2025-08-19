import React from "react";
import Layout from "../../layout/Layout";
import { Link } from "react-router-dom";
import { SiGooglemaps } from "react-icons/si";
import { FaEnvelope, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F0F6FF] text-neutral-700">
      <Layout className="py-12">
        {/* Main Grid */}
        <div className="grid md:grid-cols-5 grid-cols-1 gap-10">
          {/* Branding + Description */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="text-2xl font-extrabold text-blue-500">
              Doctor
            </Link>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus id, quos quae voluptatum saepe sequi? Ad officiis
              ullam totam veniam.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <SiGooglemaps className="text-blue-500" />
                <span>123 Street, New York USA</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-blue-500" />
                <span>info@doctor.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Company</h2>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <Link to="/" className="hover:text-blue-600">Home</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-600">Experience</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-600">About</Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Services</h2>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <Link to="/" className="hover:text-blue-600">Consultation</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-600">Diagnostics</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-600">Treatment</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
 
          
<div className="space-y-4">
  <h2 className="text-xl font-semibold whitespace-nowrap">Connect With Us</h2>
  <div className="flex items-center gap-4">
    <Link
      to="/"
      className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200"
    >
      <FaInstagram className="text-blue-500" />
    </Link>
    <Link
      to="/"
      className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200"
    >
      <FaYoutube className="text-blue-500" />
    </Link>
    <Link
      to="/"
      className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200"
    >
      <FaFacebookF className="text-blue-500" />
    </Link>
  </div>
</div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-neutral-300 my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-neutral-500 gap-2">
          <p>© 2025 Doctor. All rights reserved.</p>
          <p>
            Designed and Developed by
            <Link
              to="https://github.com/poojithapalladi/doctorapp.git"
              target="_blank"
              className="text-blue-500 ml-1 hover:underline color:blue"
            >
              Poojitha Palladi
            </Link>
          </p>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
