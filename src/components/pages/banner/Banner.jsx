import React from 'react';
import BannerImg from '../../../assets/banner.jpg';
import Layout from '../../layout/Layout';

const Banner = () => {
  return (
    <div className="relative w-full h-[90vh] md:h-[85vh]">
      {/* Banner Background Image */}
      <img
        src={BannerImg}
        alt="Doctor Banner"
        className="w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4">
        <Layout className="text-center space-y-6 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-snug">
            Having a Health Problem?
            <br />
            Don’t Make Delay on Your Life!
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-neutral-200 max-w-2xl mx-auto leading-relaxed">
            Your health is your greatest asset. Don’t let delays stand in the way of a vibrant life.
            Seek help today and take the first step towards a healthier tomorrow.
          </p>

          {/* Centered, compact button */}
          <div className="flex justify-center">
            <button className="px-8 py-3 rounded-full text-sm font-semibold bg-white text-neutral-700 border border-white hover:bg-transparent hover:text-white hover:border-white transition duration-300">
              Book an Appointment
            </button>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Banner;
