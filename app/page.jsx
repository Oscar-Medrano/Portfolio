import { Button } from "@/components/ui/button";
import { FiDownloadCloud } from "react-icons/fi";

//components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const cvUrl = 'english-curriculum-vitae.pdf'; // Adjust path to your PDF

  return <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-12">
        {/*text*/}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Full Stack Developer</span>
          <h1 className="h1 mb-7">
            <span>Oscar Medrano</span>
          </h1>
          <p className="max-w-[500px] mb-10 text-white/80">
            Certified Software Developer with practical experience in JavaScript. 
            Skilled in building web pages and proficient in database development.
          </p>
          <p className="max-w-[500px] mb-5 text-accent text-xl">
            omedranodev@gmail.com
          </p>
           {/*curiculum and Social media buttons*/}
          <div className="flex flex-col xl:flex-row items-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2 h-10 text-xl"
            >
              <a
              href={cvUrl}
              download="Oscar Medrano CV.pdf">
                Download CV
              </a>
              <FiDownloadCloud className="text-2xl" />
            </Button>
            <div className="mb-8 xl:mb-0"> 
              <Socials 
              containerStyles="flex gap-4" 
              iconStyles="w-14 h-14 border border-accent rounded flex justify-center items-center text-accent text-4xl hover:bg-accent hover:text-primary hover:transition-all duration-500"/> 
            </div>
          </div>
        </div>
        {/*photo*/}
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo/>
        </div>
      </div>
      <Stats />
    </div>
  </section>
};

export default Home;