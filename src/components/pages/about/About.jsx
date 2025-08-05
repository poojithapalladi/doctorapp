import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { HiChevronDoubleRight } from 'react-icons/hi';
import Layout from '../../layout/Layout';

const About = () => {
  return (
    <div className="w-full py-20">
      <Layout>
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
          {/* LEFT TEXT SECTION */}
          <div className="md:w-5/12 w-full space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl text-blue-500 font-semibold">About</h2>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 leading-snug">
                We Are the Best Health Care in Town
              </h1>
              <p className="text-neutral-500 text-base font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, voluptatum. Quisquam quam nam
                deserunt ipsam illo in corporis aspernatur, voluptate eligendi provident ipsum harum eius quidem
                incidunt voluptatibus eum nihil atque eos!
              </p>
            </div>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 font-medium flex items-center gap-2 transition">
              Read More
              <FiChevronRight className="text-xl" />
            </button>
          </div>

          {/* RIGHT IMAGE + BUTTONS SECTION */}
          <div className="md:w-1/2 w-full relative rounded-2xl overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2022/06/14/12/48/medicine-7261808_1280.jpg"
              alt="About Doctor"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/70 to-transparent flex items-center justify-center px-6">
              <div className="w-full flex flex-col gap-4 items-center max-w-md">
                {['Appointment', 'Find Doctors', 'Emergency Contact'].map((label, idx) => (
                  <button
                    key={idx}
                    className="w-full px-6 py-3 text-white font-medium text-base rounded-full border border-white/70 bg-white/10 hover:bg-white/20 hover:text-white transition flex items-center justify-between"
                  >
                    <span>{label}</span>
                    <HiChevronDoubleRight className="text-xl" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
