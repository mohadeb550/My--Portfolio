
import { FaGithub } from "react-icons/fa";

export default function Banner() {

    return (
     <div  className="hero h-[620px] lg:h-[800px] max-w-[1400px] mx-auto font-play flex flex-col-reverse md:flex-row justify-around items-center bg-[#242430] gap-8 px-10 md:px-16 pb-14 md:pb-36" >
    
    <div className=" text-neutral-content flex-1 xl:pl-14" data-aos="fade-down" data-aos-duration="1000">
      <div className="max-w-4xl space-y-2 lg:space-y-5">
        <h1 className=" text-2xl lg:text-4xl  font-racing text-gray-400 mb-3 "> Hello 👋 I Am Mohadeb</h1>
        <h1 className=" text-4xl lg:text-7xl  font-racing text-amber-400"> Junior MERN Stack Developer</h1>

      </div>
     <div className='flex items-center gap-3'>
     <a href='https://drive.google.com/uc?export=download&id=1VvI3kxUpt8bto3pNdxnCyRcVJ4xnRROx'>  <button className="btn btn-warning mt-6 md:mt-12"> Download Resume </button></a>

<a href='https://github.com/mohadeb550' target='_blank' >  <button className=" btn bg-gray-300 border-gray-300 hover:bg-gray-200 mt-6 md:mt-12"> <FaGithub size={30}/>  GitHub </button></a>
     </div>
    </div>

    <div className="flex-1 h-full w-full pt-6 md:pt-14" data-aos="fade-down" data-aos-duration="1000">
        
        <img src='https://i.ibb.co/JFfZrK1/final-man.png' className="  h-[370px] md:h-full w-full object-contain md:object-cover" />
    </div>

  </div>
    )
  }
  