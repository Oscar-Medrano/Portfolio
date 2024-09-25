import { Button } from "@/components/ui/button";
import { FiDownloadCloud } from "react-icons/fi";

//components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/*text*/}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Software Developer</span>
          <h1 className="h1 mb-7">
            <span>Oscar Medrano</span>
          </h1>
          <p className="max-w-[500px] mb-10 text-white/80">
            Certified Software Developer with practical experience in JavaScript. 
            Skilled in building web pages and proficient in database development.
          </p>
           {/*curiculum and Social media buttons*/}
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button
            variant="outline"
            size="lg"
            className="uppercase flex items-center gap-4 h-16 text-xl">
              <span>Download CV</span>
              <FiDownloadCloud className="text-2xl"/>
            </Button>
            <div className="mb-8 xl:mb-0"> 
              <Socials 
              containerStyles="flex gap-4" 
              iconStyles="w-16 h-16 border border-accent rounded flex justify-center items-center text-accent text-4xl hover:bg-accent hover:text-primary hover:transition-all duration-500"/> 
            </div>
          </div>
        </div>
        {/*photo*/}
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo/>
        </div>
      </div>
    </div>
    <Stats />
  </section>
};

export default Home;