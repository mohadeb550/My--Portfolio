import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactMe() {


    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i9rfsjq', 'template_7c10k5a', form.current, 'obvgqwmlKnS271e1n')
      .then((result) => {
        toast.success('Contact Information Send Successfully')
      }, (error) => {
          console.log(error.text);
      });
  };



    return (
     <section className=" bg-[url('https://i.ibb.co/wpgB8MZ/16183196-NEUMORPHIC-CIRCLES-BACKGROUND.jpg')] h-[770px] lg:h-[750px] bg-auto md:bg-cover mt-44 lg:mt-56">

<Toaster />

      <h2 className="text-4xl text-yellow-500 font-play font-bold text-right p-8 pb-0 mr-16"> Contact Me </h2>
      <p className="text-sm text-gray-400 font-play  text-right p-1 mr-16"> Fill the form easily and send me your info</p>
  
      <div className="bg-[#232230] w-[83%] md:w-[65%] mx-auto mt-12 p-6 lg:p-10 pb-4">
  
          <form ref={form} onSubmit={sendEmail}>

          <div className="grid lg:grid-cols-1 gap-2 opacity-90">
              <input type="text" className="p-3 outline-none" placeholder="Your Name" name='user_name' />
              <input type="text" className="p-3 outline-none" placeholder="Email Address"  name='user_email'/>
              <input type="text" className="p-3 outline-none " placeholder="Phone Number" name='phone'/>
              <textarea className="p-3 outline-none " rows={4} placeholder="Message" name='message' />
                  
          </div>
        
         <div className="flex justify-center items-center">
         <button type="submit" className="p-3 outline-none border font-play border-[#FFC107] text-[#FFC107] my-6 px-10 hover:bg-amber-600/20"> Submit </button>
         </div>
         </form>
      </div>
     </section>
    )
  }
