


const AboutMe = () => {

  
    return (
        <div  className="hero h-[1000px] lg:h-[700px] max-w-[1400px] mx-auto font-play flex flex-col md:flex-row justify-around items-center bg-[#242430] pt-20 px-10 md:px-16 md:pb-28 border-t-[1px] border-gray-700" >

        <div className="flex-1 flex justify-center items-center h-full w-full pt-6 md:pt-14" data-aos="fade-up-right" data-aos-duration="1000">
            
            <img src='https://i.ibb.co/nDnGJBS/removal-ai-e6523a13-ad09-4367-aeaf-eb57ec9e6b2c-portrait-smiling-bearded-man-holding-laptop-computer.png' className=" " />
        </div>
    
        <div className=" text-neutral-content flex-1" data-aos="fade-up-left" data-aos-duration="1000">
          <div className="max-w-4xl space-y-2 lg:space-y-5">
            <h1 className=" text-2xl lg:text-4xl  font-racing text-gray-400 my-5 text-left"> About Me🤭</h1>
            <h1 className=" text-3xl lg:text-4xl  font-racing text-amber-400 text-left"> Junior Web Developer: Crafting Digital Marvels</h1>
            <p className="text-gray-400 text-left font-kanit italic">I'm a junior front-end developer with a passion for React, proficient in
HTML, CSS, and JavaScript. Committed to continuous learning and
staying updated on industry trends, i also have basic knowledge of
Node.js, Express.js, MongoDB, and Mongoose.
</p>

<h1 className=" text-2xl lg:text-2xl font-racing text-amber-400 mb-3 text-left"> Name : <span className="text-gray-400"> Mohadeb Bhowmik</span>  </h1> 
<h1 className=" font-racing text-amber-400 mb-3 text-left text-2xl lg:text-2xl "> Address : <span className="text-gray-400"> Tangail, Bangladesh </span>  </h1> 
<h1 className="   font-racing text-amber-400 mb-3 text-left text-2xl lg:text-2xl "> Email : <span className="text-gray-400"> mohadebbhowmik7@gmail.com </span>  </h1> 
          </div>
         <a href='https://drive.google.com/uc?export=download&id=1VvI3kxUpt8bto3pNdxnCyRcVJ4xnRROx' download>  <button className="btn btn-warning mt-5 mb-20 md:mb-0"> Download Resume </button></a>
        </div>
    
    
      </div>
    );
};

export default AboutMe;

