import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronsRight } from 'react-icons/fi';
import SpecialistCard from './SpecialistCard';
import Layout from '../../layout/Layout';


import DentalCare from '../../../assets/dental-care.png'
import Cardiology from '../../../assets/cardiology.png'
import EyeCare from '../../../assets/eye-care.png'
import Gynecology from '../../../assets/gynecology.png'
import Neurology from '../../../assets/neurology.png'






const Specialist=()=>{
    const specialistData = [
        {
            id: 1,
            img: DentalCare,
            title: "Dental Care",
            totalDoctors: "15+",
        },
        {
            id: 2,
            img: Cardiology,
            title: "Cardiology",
            totalDoctors: "33+",
        },
        {
            id: 3,
            img: EyeCare,
            title: "Eye Care",
            totalDoctors: "18+",
        },
        {
            id: 4,
            img: Gynecology,
            title: "Gynecologists",
            totalDoctors: "25+",
        },
        {
            id: 5,
            img: Neurology,
            title: "Neurology Care",
            totalDoctors: "10+",
        },
    ]


    return (
        
            <Layout className='w-full space-y-6'>
    {/*Top Section*/}

 <div className='w-full flex items-center justify-between'>
<h1 className='text-2xl text-neutral-700 font-semibold'>Our Specialist</h1>
<Link to='/specialists' className='text-base text-blue-600 hover:text-blue-50 font-normal flex items-center gap-x-2 ease-in-out duration-300'>View All
<FiChevronsRight className='text-lg' />
</Link>
</div>
    {/* Service Card */}
    <div className='grid md:grid-cols-5 grid-cols-2 md:gap-8 gap-4'>
        {specialistData.map((item)=>( 
            <SpecialistCard key={item.id} {...item}/>
        ))}


    </div>

</Layout>

    )

}

export default Specialist