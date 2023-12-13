
import AboutMe from '../components/AboutMe';
import Banner from '../components/Banner';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skill from '../components/Skill';

const Root = () => {
    return (
        <>
        <Navbar/>
        <Banner/>
        <div className='fixed top-0 -z-50 w-full h-full bg-[#1E1E28]'> </div>
        <section className='max-w-[1400px] mx-auto'>
        <AboutMe/>
        <Skill/>
        <Projects/>
        <ContactMe/>
        <Footer/>
        </section>
        </>
    );
};

export default Root;