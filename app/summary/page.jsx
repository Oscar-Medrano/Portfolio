"use client";

import { 
    FaHtml5, 
    FaCss3, 
    FaReact,
    FaJsSquare, 
    FaNodeJs 
} from 'react-icons/fa';
import { 
    SiNextdotjs,
    SiMysql,
    SiTailwindcss, 
    SiGithub } from 'react-icons/si';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';

import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';

const about = {
    title: 'About me',
    description: "Hi I'm Oscar, a Software Developer dedicated to crafting elegant and user-friendly web experiences. My expertise lies in Frontend development, where I specialize in building intuitive user interfaces. With a strong foundation in databases (with MySQL), I also possess proficiency in JavaScript. A native Spanish speaker but also I am fluent in English (level B2).",
    info:[ 
        {
            fieldName: 'Name',
            fieldValue: 'Oscar Medrano'
        },
        {
            fieldName: 'Phone',
            fieldValue: '(+58)412-0819925'
        },
        {
            fieldName: 'Mail',
            fieldValue: 'omedranodev@gmail.com'
        },
        {
            fieldName: 'Languages',
            fieldValue: 'English and Spanish'
        },
    ]
}

const education = {
    title: "My education",
    description: "I have a solid foundation in JavaScript development, having completed the comprehensive program at Platzi. This intensive curriculum equipped me with the skills to design, develop, and deploy robust web applications. Additionally, I've honed my English language proficiency to a B2 level through courses at FyrLois, enabling me to effectively communicate and collaborate with international teams.",
    items: [

      {
        Institution: "Platzi",
        Degree: "Curso de Manipulación de Arrays en JavaScript",
        Aproved: "June 19, 2024"
      },
      {
        Institution: "Platzi",
        Degree: "Curso de Backend con Node.JS: Bases de Datos con PostgreSQL",
        Aproved: "May 22, 2024"
      },
      {
        Institution: "Platzi",
        Degree: "FullStack Developer con JavaScript",
        Aproved: "May 22, 2024"
      },
      {
        Institution: "Platzi",
        Degree: "Curso de Fundamentos de Bases de datos",
        Aproved: "March 26, 2024"
      },
      {
        Institution: "Platzi",
        Degree: "Curso de Introducción al desarrollo Backend",
        Aproved: "February 19, 2024"
      },
      {
        Institution: "Platzi",
        Degree: "Laboratorio de React.JS: E-Commerce profesional",
        Aproved: "February 5, 2024"
      },
      {
        Institution: "Platzi",
        Degree: "Curso de React.JS",
        Aproved: "January 8, 2024"
      },
      {
        Institution: "Platzi",
        Degree: "Curso de React.JS con Vite.JS y TailwindCSS",
        Aproved: "January 26, 2024"
      },
      {
        Institution: "Platzi",
        Degree: "Curso de Fundamentos de Node.JS",
        Aproved: "April 12, 2024"
      },
      {
        Institution: "Platzi",
        Degree: "Curso de Backend con Node.JS: API REST con Express.JS",
        Aproved: "April 30, 2024"
      },
      {
        Institution: "Platzi",
        Degree: "Curso de asincronismo con JavaScript",
        Aproved: "October 20, 2023"
      },
      {
        Institution: "Platzi",
        Degree: "Curso Practico de Javascript",
        Aproved: "September 12, 2023"
      },
      {
        Institution: "Platzi",
        Degree: "Curso de Frontend Developer",
        Aproved: "July 5, 2023"
      },
      {
        Institution: "Platzi",
        Degree: "Curso Practico de Frontend Developer",
        Aproved: "July 25, 2023"
      },
      {
        Institution: "FyrLois",
        Degree: "Adults 5 Level, equivalent to B2",
        Aproved: "November, 2023"
      },
      {
        Institution: "Platzi",
        Degree: "Curso Profesional de Git y GitHub",
        Aproved: "February 17, 2022"
      },
      {
        Institution: "Platzi",
        Degree: "Curso Definitivo de HTML y CSS",
        Aproved: "August 4, 2022"
      },
      {
        Institution: "Platzi",
        Degree: "Curso de Algebra",
        Aproved: "August 23, 2022"
      },
      {
        Institution: "Platzi",
        Degree: "Curso Básico de Python",
        Aproved: "November 19, 2021"
      },
      {
        Institution: "Platzi",
        Degree: "Curso de Python Comprehensions: Funciones y manejo de errores",
        Aproved: "March 15, 2023"
      },
      {
        Institution: "Platzi",
        Degree: "Curso de Programación Básica",
        Aproved: "August 30, 2021"
      },
      {
        Institution: "Platzi",
        Degree: "Curso de Fundamentos de Matematicas",
        Aproved: "May 28, 2021"
      }

    ]
}

const skills = {
    title: "Tech skills",
    description: "These are the technologies that I have mastered",
    skillList: [
        {
            icon: <FaHtml5 />,
            name:"HTML 5"
        },
        {
            icon: <FaCss3 />,
            name:"CSS 3"
        },
        {
            icon: <FaJsSquare />,
            name:"JavaScript"
        },
        {
            icon: <FaReact />,
            name:"React"
        },
        {
            icon: <SiTailwindcss />,
            name:"Tailwind CSS"
        },
        {
            icon: <FaNodeJs />,
            name:"Node.js"
        },
        {
            icon: <SiNextdotjs />,
            name:"Next.js"
        },
        {
            icon: <SiMysql />,
            name:"MySQL"
        },
        {
            icon: <SiGithub />,
            name:"GitHub"
        },
    ]
}

const Summary = () => {
    return(
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"    
        >
            <div className="container mx-auto">
                <Tabs
                defaultValue="about"
                className='flex flex-col xl:flex-row gap-[60px]'
                >
                    <TabsList
                    className="flex flex-col w-full max-w-[400px] mx-auto xl:mx-0 gap-6"
                    >
                        <TabsTrigger value="about">About me</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                    </TabsList>

                    {/* Content */}
                    <div className="min-h-[70vh] w-full mb-4">

                      {/* About me */}
                      <TabsContent value="about" className="w-full text-center xl:text-left">

                        <div className='flex flex-col gap-[30px]'>
                          <h3 className="text-4xl font-bold">{about.title}</h3>
                          <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0 mb-4">{about.description}</p>
                        </div>

                        <ul className="grid grid-cols-1 max-w-[620px] mx-auto xl:mx-0">
                          {about.info.map((item, index) =>{
                            return(
                              <li key={index} className="flex items-center justify-center xl:justify-start mb-4">
                                <span className='text-white/70 mr-4'>{item.fieldName}</span>
                                <span className='text-xl text-accent-hover'>{item.fieldValue}</span>
                              </li>
                            )
                          })}
                        </ul>

                      </TabsContent>

                      {/* Skills */}
                      <TabsContent value="skills" className="w-full">
                        <div className="flex flex-col gap-[30px]">
                          <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{skills.title}</h3>
                            <p className="max-w-[600px] text-white/90 mx-auto xl:mx-0">{skills.description}</p>
                          </div>
                          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 xl:gap[30px]">
                            {skills.skillList.map((skill, index) => {
                              return (
                                <li key={index}>
                                  <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                      <TooltipTrigger className="w-full h-[150px] bg-black/50 rounded-xl flex justify-center items-center group">
                                        <div className="text-6xl group-hover:text-accent-hover transition-all duration-300">
                                          {skill.icon}
                                        </div>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <span class="notranslate">{skill.name}</span>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      </TabsContent>

                      {/* Education */}
                      <TabsContent value="education" className="w-full">

                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                          <h3 className="text-4xl font-bold">{education.title}</h3>
                          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                          <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                              {education.items.map((item, index)=> {
                                return(
                                  <li
                                  key={index}
                                  className="bg-black/50 h-[290px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                  >
                                    <span className='text-accent'>{item.Aproved}</span>
                                    <h3 className="text-xl max-w-[260px] min-h-[10px] text-center lg:text-left">
                                      <span class="notranslate">
                                        {item.Degree}
                                      </span></h3>
                                    <div className="flex items-center gap-3">
                                      {/* Dot */}
                                      <span className ="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                      <p className="text-white/90">
                                        <span class="notranslate">
                                          {item.Institution}
                                        </span></p>
                                    </div>
                                  </li>
                                )
                              })}
                            </ul>
                          </ScrollArea>
                        </div>
                      </TabsContent>
                    </div>

                </Tabs>
            </div>
        </motion.div>
    )
}

export default Summary;