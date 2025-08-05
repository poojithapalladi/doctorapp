import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiChevronRight } from "react-icons/fi";
import Layout from "../../layout/Layout";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex flex-col">
      <div className="flex-1">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="w-full relative h-[calc(100vh-80px)]">
              <div className="w-full h-full">
                <img
                  src="https://cdn.pixabay.com/photo/2017/03/14/03/20/woman-2141808_1280.jpg"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center flex-col bg-gradient-to-r from-blue-950/50 to-blue-700/30 z-30">
                <Layout>
                  <div className="bg-white/20 border border-white/30 backdrop-blur-lg px-8 py-6 rounded-xl shadow-xl w-[380px] max-w-full text-white space-y-5">
                    <div className="space-y-3">
                      <h1 className="text-3xl font-bold leading-snug drop-shadow-md">
                        We Take care of your <br /> Healthy Health
                      </h1>
                      <p className="text-sm text-white/80 font-light">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                        architecto itaque optio eos illum. Tenetur praesentium
                        reiciendis ducimus molestias soluta.
                      </p>
                    </div>
                      <button className="w-fit px-6 py-2.5 text-base text-neutral-700 font-semibold rounded-xl bg-white border-2 border-white hover:bg-transparent hover:text-white hover:border-white flex items-center gap-x-2 transition duration-300">
 
                      Our Services
                      <FiChevronRight className="text-xl pt-0.5" />
                    </button>
                  </div>
                </Layout>
              </div>
            </div>
          </SwiperSlide>

           <SwiperSlide>
            <div className="w-full relative h-[calc(100vh-80px)]">
              <div className="w-full h-full">
                <img
                  src="https://cdn.pixabay.com/photo/2016/01/19/15/05/computer-1149148_1280.jpg"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center flex-col bg-gradient-to-r from-blue-950/50 to-blue-700/30 z-30">
                <Layout>
                  <div className="bg-white/20 border border-white/30 backdrop-blur-lg px-8 py-6 rounded-xl shadow-xl w-[380px] max-w-full text-white space-y-5">
                    <div className="space-y-3">
                      <h1 className="text-3xl font-bold leading-snug drop-shadow-md">
                        We Take care of your <br /> Healthy Health
                      </h1>
                      <p className="text-sm text-white/80 font-light">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                        architecto itaque optio eos illum. Tenetur praesentium
                        reiciendis ducimus molestias soluta.
                      </p>
                    </div>
                      <button className="w-fit px-6 py-2.5 text-base text-neutral-700 font-semibold rounded-xl bg-white border-2 border-white hover:bg-transparent hover:text-white hover:border-white flex items-center gap-x-2 transition duration-300">
 
                      Our Services
                      <FiChevronRight className="text-xl pt-0.5" />
                    </button>
                  </div>
                </Layout>
              </div>
            </div>
          </SwiperSlide>

 
                   <SwiperSlide>
            <div className="w-full relative h-[calc(100vh-80px)]">
              <div className="w-full h-full">
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541_1280.jpg"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center flex-col bg-gradient-to-r from-blue-950/50 to-blue-700/30 z-30">
                <Layout>
                  <div className="bg-white/20 border border-white/30 backdrop-blur-lg px-8 py-6 rounded-xl shadow-xl w-[380px] max-w-full text-white space-y-5">
                    <div className="space-y-3">
                      <h1 className="text-2xl sm:text-3xl font-bold leading-snug drop-shadow-md w-[260px] sm:w-full text-left sm:text-left">
  We Take care of your Healthy Health
</h1>
   <p className="text-sm text-white/80 font-light">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                        architecto itaque optio eos illum. Tenetur praesentium
                        reiciendis ducimus molestias soluta.
                      </p>
                    </div>
                      <button className="w-fit px-6 py-2.5 text-base text-neutral-700 font-semibold rounded-xl bg-white border-2 border-white hover:bg-transparent hover:text-white hover:border-white flex items-center gap-x-2 transition duration-300">
 
                      Our Services
                      <FiChevronRight className="text-xl pt-0.5" />
                    </button>
                  </div>
                </Layout>
              </div>
            </div>
          </SwiperSlide>

   

         </Swiper>
      </div>
    </div>
  );
};

export default Hero;
