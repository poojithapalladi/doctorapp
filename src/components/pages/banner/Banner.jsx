import React from 'react';
import BannerImg from '../../../assets/banner.jpg';
import Layout from '../../layout/Layout';

const Banner=()=>{

return ( 
<div className='w-full md:aspect-[5/2] aspect-auto relative '>
<img src={BannerImg} alt="banner" className='w-full h-full object-cover object-center'/>
<div className='w-full h-full absolute top-0 left-0 bg-gradient-to-b from-neutral-900 via-neutral-900/70 to-neutral-900/20'>
<Layout className='w-full h-full md:pt-16 pt-2'>

<div className='w-full h-full  flex items-center justify-start flex-col justify-center md:space-y-12 space-y-6'>
    <div className='space-y-4'>
<h1 className='md:text-6xl text-2xl text-neutral-50  font-bold !leading-[1.3] capital'>Having a Health Problem? <br className='md:block hidden'/>Don't Make delay on your life!</h1>
<p className='md:text-lg text-sm text-neutral-400 font-normal'>
    Your health is greatest asset.Don't let delays stand in the way of a vibrant life.<br/>Seek help today and take the first step towards a healthier tomorrow
</p>

    </div>
    <button className='w-fit md:px-16 px-12 md:py-4 py-3 rounded-full text-lg text-neutral-700 font-medium bg-neutral-50 border-2 border-neutral-50 hover:bg-transparent hover:text-neutral-50 hover:border-neutral-50 flex items-center gap-x-2 ease-in-out duration-300'
>Book a Appointment</button>
</div>

</Layout>

</div>
</div>
)
}


export default Banner