import {FC} from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import ProfilelPhoto from "../assets/profile_photo.png";

const LandingPage: FC = () => {
  return (
    <>
   
       
   <section id="cover" className="min-h-full">
      <Header  bgColor="bg-gray-400" />
      <Hero profilePhoto={ ProfilelPhoto } profileCaption="Webflow Developer - UI/UX Designer"  profileGreet="Hello, I'm Ayush" />
      </section>
      <section id="about" className="relative">
        <Banner/>
      </section>

   
    </>
  );
}

export default LandingPage;