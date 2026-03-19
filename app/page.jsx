import { Button } from "@/components/ui/button";
import { FiDownloadCloud } from "react-icons/fi";

//components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import FadeIn from "@/components/FadeIn";

const Home = () => {
  const cvUrl = 'english-curriculum-vitae.pdf'; 

  return <section className="h-full">
    <div className="container mx-auto h-full px-2 sm:px-4">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-12 2xl:pt-12 2xl:pb-16">
        {/*text*/}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <FadeIn>
            <span className="text-base sm:text-xl md:text-2xl 2xl:text-3xl">Full Stack Developer</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="h1 mb-2 sm:mb-3 2xl:mb-5">
              <span>Oscar Medrano</span>
            </h1>
            <p className="italic text-accent text-base sm:text-xl md:text-2xl 2xl:text-3xl mb-4 sm:mb-7">
              "Scaling Visions through Robust Code"
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-[600px] 2xl:max-w-[800px] mb-6 sm:mb-10 text-white/80 text-base sm:text-lg md:text-xl 2xl:text-2xl">
              Results-driven Fullstack Developer with a focus on <br/>high-performance architectures. I bridge the gap between intuitive UI and robust backends, leveraging Golang and advanced database design to solve complex technical challenges. I am committed to delivering professional, <br/>tailor-made solutions that transform client visions into scalable, high-quality digital products.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="max-w-[500px] mx-auto xl:mx-0 mb-4 sm:mb-5 text-accent text-base sm:text-xl md:text-2xl 2xl:text-3xl">
              omedranodev@gmail.com
            </p>
          </FadeIn>
           {/*curiculum and Social media buttons*/}
          <FadeIn delay={0.4}>
            <div className="flex flex-col xl:flex-row items-center gap-3 sm:gap-4">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 h-10 sm:h-10 md:h-12 2xl:h-14 text-base sm:text-xl md:text-2xl 2xl:text-3xl px-4 sm:px-6"
              >
                <a
                href={cvUrl}
                download="Oscar Medrano CV.pdf">
                  Download CV
                </a>
                <FiDownloadCloud className="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl" />
              </Button>
              <div className="mb-6 sm:mb-8 xl:mb-0"> 
                <Socials 
                containerStyles="flex gap-3 sm:gap-4" 
                iconStyles="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 2xl:w-20 2xl:h-20 border border-accent rounded flex justify-center items-center text-accent text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl hover:bg-accent hover:text-primary hover:transition-all duration-500"/> 
              </div>
            </div>
          </FadeIn>
        </div>
        {/*photo*/}
        <FadeIn direction="left" className="order-1 xl:order-none mb-6 sm:mb-8 xl:mb-0">
          <Photo/>
        </FadeIn>
      </div>
    </div>
  </section>
};

export default Home;