


const Projects = () => {
    return (
        <section className="bg-[url('https://i.ibb.co/88HsDr3/16183196-NEUMORPHIC-CIRCLES-BACKGROUND1.jpg')] grid xl:grid-cols-2 items-center justify-items-center gap-4 border-y-[1px] border-gray-700 py-24 px-4">

            <div className="xl:row-span-2 flex flex-col justify-center items-center">
            <h1 className=" text-[34px] lg:text-7xl text-[#FFC107] mb-5 text-center font-racing" data-aos="fade-right" data-aos-duration="1000">Latest Projects</h1>
            <p className="text-gray-400 mb-20 md:mb-32 text-center md:text-right">I'm a junior front-end developer with a passion for React, proficient in
HTML, CSS, and JavaScript. Committed to continuous learning and
staying updated on industry trends, i also have basic knowledge of
Node.js, Express.js, MongoDB, and Mongoose.
</p>
            <a href='https://rapid-parcel.web.app/' target="_blank"> <div className=" transition-all hover:opacity-70 cursor-pointer shadow-xl shadow-black/20">
            <img src="https://i.ibb.co/S6dTgFc/Rapid-Parcel-Express-Delivery-Netw0ork.png"  className=" md:h-[650px] object-contain rounded p-1 bg-gray-600"/>
            </div></a>
            <div className="flex items-center justify-center gap-2 my-10">
            <p className="text-gray-400  text-center"> <span className="text-xl"> Rapid Parcel -</span> A Parcel Delivery Management site where users can delivery their parcel simply.

</p>
            </div>
            </div>


            <div className="flex flex-col justify-center items-center">
           <a href='https://savorspot-cafe.web.app/' target="_blank">
           <div className=" transition-all hover:opacity-70 cursor-pointer shadow-xl shadow-black/20">
                <img src="https://i.ibb.co/7krn3zX/Savor-Sport-Cafe-Where-Every-Bite-Tells-a-Delicious-Story.png" className=" md:h-[650px] object-contain rounded p-1 bg-gray-600" />
            </div></a>
            <div className="flex items-center justify-center gap-2 my-10">
            <p className="text-gray-400 "> <span className="text-xl"> SavorSpot Cafe - </span>  A Restrurent Management site where users can order their favorite foods.
</p>
            </div>
            </div>


            <div className="flex flex-col justify-center items-center ">
           <a href='https://brandshop-ece48.web.app' target="_blank"> <div className=" transition-all hover:opacity-70 cursor-pointer shadow-xl shadow-black/20">
            <img src="https://i.ibb.co/PZcXNf3/Brand-Shop-Explore-Our-Tech-Universe.png" className=" md:h-[650px] object-contain rounded p-1 bg-gray-600" />
            </div></a>
            <div className="flex items-center justify-center gap-2 my-10">
            <p className="text-gray-400"> <span className="text-xl"> BrandShop - </span> A Brands Product Related Site
</p>
            </div>
            </div>
            
        </section>
    );
};

export default Projects;



