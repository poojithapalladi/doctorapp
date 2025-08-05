import React  from "react";
import { Link} from "react-router-dom";
import { FiChevronsRight } from "react-icons/fi";
import Layout from "../../layout/Layout";
import DoctorCard from "./DoctorCard";

const Doctor=()=>{
        const doctorData = [
        {
            id: 1,
            img: "https://cdn.pixabay.com/photo/2024/02/21/15/01/doctor-8587851_640.png",
            name: "Dr. John Doe",
            position: "Cardiologist",
        },
        {
            id: 2,
            img: "https://cdn.pixabay.com/photo/2024/03/29/03/30/ai-generated-8662131_640.png",
            name: "Dr. Luna Brawn",
            position: "Neurologist",
        },
        {
            id: 3,
            img: "https://cdn.pixabay.com/photo/2024/01/19/18/52/ai-generated-8519596_640.png",
            name: "Dr. Georgia Thapa",
            position: "Dentist",
        },
        {
            id: 4,
            img: "https://cdn.pixabay.com/photo/2024/08/13/11/42/ai-generated-8965801_640.png",
            name: "Dr. Brooke Rihanek",
            position: "Gynecologist",
        },
    ]


    return (
        <Layout className='w-full space-y-6'>
    {/*Top Section*/}

 <div className='w-full flex items-center justify-between'>
<h1 className='text-1xl text-neutral-700 font-semibold'>Meet Our Doctors</h1>
<Link to='/doctors' className='text-base text-blue-600 hover:text-blue-50 font-normal flex items-center gap-x-2 ease-in-out duration-300'>View All
<FiChevronsRight className='text-lg' />
</Link>
</div>
    {/* Service Card */}
    <div className='grid md:grid-cols-4 grid-cols-1 gap-12'>
        {doctorData.map((item)=>( 
            <DoctorCard key={item.id} {...item}/>
        ))}


    </div>

</Layout>

     )
}

export default Doctor   
 