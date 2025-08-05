 import Layout from "../../layout/Layout";

const Appointment = () => {
  return (
    <div className="w-full space-y-6">
      <Layout>
        <div className="w-full flex items-center gap-10 justify-between md:flex-nowrap flex-wrap">
  {/* Working Hours Card */}
 
 
 
 {/* Working Hours Card - Fully Responsive */}
<div className="relative w-full md:max-w-md rounded-xl overflow-hidden shadow-lg mx-auto md:mx-0">
  <img
    src="https://cdn.pixabay.com/photo/2021/11/21/06/16/female-6813278_640.png"
    alt="working hours"
    className="w-full h-96 object-cover"
  />
  <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4 sm:p-6 md:p-8">
    <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 sm:px-6 py-6 text-white space-y-3 sm:space-y-4">
      <h1 className="text-xl sm:text-2xl font-semibold text-center text-white">Working Hours</h1>
      <p className="text-xs sm:text-sm text-center text-white/90">
        This hospital operates only on the following days and hours:
      </p>
      <div className="text-xs sm:text-sm space-y-1 sm:space-y-2">
        <p className="flex justify-between border-b border-white/20 pb-1">
          <span>Sunday - Monday</span>
          <span>8:00 AM - 8:00 PM</span>
        </p>
        <p className="flex justify-between border-b border-white/20 pb-1">
          <span>Tuesday - Wednesday</span>
          <span>7:00 AM - 8:00 PM</span>
        </p>
        <p className="flex justify-between border-b border-white/20 pb-1">
          <span>Thursday - Friday</span>
          <span>8:00 AM - 8:00 PM</span>
        </p>
        <p className="flex justify-between border-b border-white/20 pb-1">
          <span>Saturday, Holidays</span>
          <span>Closed</span>
        </p>
        <p className="flex justify-between">
          <span>Emergency</span>
          <span>24/7</span>
        </p>
      </div>
      <p className="text-[11px] text-white/80 text-center">
        For emergencies, please contact us or book an appointment.
      </p>
    </div>
  </div>
</div>




          {/* Appointment Form */}
          <div className="md:w-2/3 w-full space-y-6 bg-neutral-100/40 rounded-xl md:p-8 p-4">
            <h1 className="text-2xl text-neutral-800 font-semibold">Book An Appointment</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
              <div className="space-y-1.5">
                <label className="text-base text-neutral-400 font-normal block">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  className="w-full h-12 border border-neutral-300/80 bg-neutral-200/50 rounded-lg px-4 placeholder:text-neutral-400 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 text-base text-neutral-600 font-normal"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-base text-neutral-400 font-normal block">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. info@example.com"
                  className="w-full h-12 border border-neutral-300/80 bg-neutral-200/50 rounded-lg px-4 placeholder:text-neutral-400 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 text-base text-neutral-600 font-normal"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-base text-neutral-400 font-normal block">Phone Number</label>
                <input
                  type="text"
                  placeholder="e.g. +977-9800000000"
                  className="w-full h-12 border border-neutral-300/80 bg-neutral-200/50 rounded-lg px-4 placeholder:text-neutral-400 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 text-base text-neutral-600 font-normal"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-base text-neutral-400 font-normal block">Choose Subject</label>
                <select
                  name="department"
                  className="w-full h-12 border border-neutral-300/80 bg-neutral-200/50 rounded-lg px-4 text-base text-neutral-600 font-normal focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                >
                  <option value="consultant">Consultant</option>
                  <option value="makeenquery">Make Enquiry</option>
                  <option value="healthcheckup">Health Checkup</option>
                  <option value="visitdoctor">Visit Doctor</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-base text-neutral-400 font-normal block">Select Date</label>
                <input
                  type="date"
                  className="w-full h-12 border border-neutral-300/80 bg-neutral-200/50 rounded-lg px-4 text-base text-neutral-600 font-normal focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-base text-neutral-400 font-normal block">Select Time</label>
                <input
                  type="time"
                  className="w-full h-12 border border-neutral-300/80 bg-neutral-200/50 rounded-lg px-4 text-base text-neutral-600 font-normal focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                />
              </div>
            </div>
            <button className="md:w-fit w-full px-8 py-3 text-base font-medium rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition duration-300">
              Make an Appointment
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Appointment;
