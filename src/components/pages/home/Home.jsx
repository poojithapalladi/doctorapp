import React from 'react';
import Hero from '../hero/Hero.jsx';
import About from '../about/About.jsx';
import Service from '../service/Service.jsx';
import Specialist from '../specialist/Specialist.jsx';
import Banner from '../banner/Banner.jsx';
import Doctor from '../doctor/Doctor.jsx';
import Appointment from '../appointment/Appointment.jsx';
import Blog from '../blog/Blog.jsx';




const Home=()=>{
    return (

<div className='w-full h-auto space-y-20 pb-12'>


    {/*Hero section */}
    <Hero/>

    {/*About*/}
<About/>
    {/*Services*/}
    <Service/>

    {/*Specialities*/}
    <Specialist/>

 
    {/*Banner*/}
    <Banner/>

    {/*Doctors*/}
    <Doctor/>

    {/*Appointment*/}
    <Appointment/>

    {/*Blogs*/}
    <Blog/>

 </div>
    )

}

export default Home;