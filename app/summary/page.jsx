"use client";

import { 
    FaDatabase,
    FaVuejs
} from 'react-icons/fa';
import { 
    SiGoland,
} from 'react-icons/si';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { BsPhone, BsEnvelope, BsGlobe, BsPerson } from 'react-icons/bs';
import FadeIn from "@/components/FadeIn";

const about = {
    title: 'About me',
    description: [
        "I am a developer who believes that software should be as robust under the hood as it is intuitive on the surface. My journey in tech is driven by a passion for solving architectural puzzles. I design systems where Golang's efficiency meets the reactivity of Vue.js.",
        "With expertise in Vue, React, and Next.js, combined with a background in project management, I approach every line of code with a business mindset: focusing on scalability, clean maintenance, and delivering real value to the end user. I'm always exploring new ways to push the boundaries of fullstack performance."
    ],
    info:[ 
        {
            icon: <BsPerson className="text-xl text-accent" />,
            fieldName: 'Name',
            fieldValue: 'Oscar Medrano'
        },
        {
            icon: <BsPhone className="text-xl text-accent" />,
            fieldName: 'Phone',
            fieldValue: '+58 412-0819925'
        },
        {
            icon: <BsEnvelope className="text-xl text-accent" />,
            fieldName: 'Email',
            fieldValue: 'omedranodev@gmail.com'
        },
        {
            icon: <BsGlobe className="text-xl text-accent" />,
            fieldName: 'Languages',
            fieldValue: 'Spanish: Native | English: B2'
        },
    ]
}

const skills = {
    title: "Tech skills",
    description: "Building scalable solutions with modern technologies",
    skillCategories: [
        {
            title: "Backend Development",
            icon: <SiGoland className="text-4xl" />,
            items: [
                "Efficient APIs: Crafting concurrent, high-throughput REST APIs with Golang",
                "Security First: Implementing secure JWT Authentication and Authorization flows",
                "Node.js Expertise: Legacy system maintenance and API development using Express.js",
                "Data Integrity: Leveraging Go's strict typing to ensure robust backend logic"
            ]
        },
        {
            title: "Frontend Development",
            icon: <FaVuejs className="text-4xl" />,
            items: [
                "Dual-Framework Expertise: Crafting high-performance UIs using Vue.js and React",
                "Next.js Specialist: Building SEO-friendly, server-side rendered (SSR) applications",
                "Modern Styling: Leveraging Tailwind CSS for rapid, component-driven UI development",
                "State Management: Expert handling of complex application states (Pinia, Redux, Context API)"
            ]
        },
        {
            title: "Database & DevOps",
            icon: <FaDatabase className="text-4xl" />,
            items: [
                "Relational Database Expert: Designing advanced PostgreSQL and MySQL schemas for data integrity",
                "Query Optimization: Improving application performance through efficient indexing and SQL tuning",
                "Containerization: Using Docker to create consistent development and production environments",
                "Version Control: Professional workflow management using Git (Branching, Merging, Pull Requests)"
            ]
        }
    ]
}

const Summary = () => {
    return(
        <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"    
        >
            <div className="container mx-auto px-2 sm:px-4">
                <FadeIn>
                <Tabs
                defaultValue="about"
                className='flex flex-col xl:flex-row gap-8 xl:gap-[60px]'
                >
                    <TabsList
                    className="flex flex-col w-full max-w-[400px] mx-auto xl:mx-0 gap-4 sm:gap-6"
                    >
                        <TabsTrigger value="about" className="text-base sm:text-lg py-3">About me</TabsTrigger>
                        <TabsTrigger value="skills" className="text-base sm:text-lg py-3">Skills</TabsTrigger>
                    </TabsList>

                    {/* Content */}
                    <div className="min-h-[60vh] w-full mb-4">

                      {/* About me */}
                      <TabsContent value="about" className="w-full mt-0 p-4 sm:p-6">
                        <FadeIn>
                        <div className='flex flex-col xl:flex-row gap-6 xl:gap-[60px]'>
                            {/* Bio Text */}
                            <div className='flex flex-col gap-4 sm:gap-6 flex-1'>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">{about.title}</h3>
                                <div className="max-w-[600px] text-white/80 leading-relaxed text-base sm:text-lg space-y-3">
                                    <p>{about.description[0]}</p>
                                    <p>{about.description[1]}</p>
                                </div>
                            </div>
                            
                            {/* Contact Info - Right Column */}
                            <div className="xl:w-[280px] flex-shrink-0">
                                <ul className="flex flex-col gap-4 sm:gap-6">
                                {about.info.map((item, index) =>{
                                    return(
                                    <li key={index} className="flex items-center gap-3 sm:gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className='text-white/50 text-xs sm:text-sm'>{item.fieldName}</span>
                                            <span className='text-white text-sm sm:text-lg'>{item.fieldValue}</span>
                                        </div>
                                    </li>
                                    )
                                })}
                                </ul>
                            </div>
                        </div>
                        </FadeIn>
                      </TabsContent>

                      {/* Skills */}
                      <TabsContent value="skills" className="w-full mt-0 p-4 sm:p-6">
                        <div className="flex flex-col gap-[30px]">
                          <FadeIn>
                          <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{skills.title}</h3>
                            <p className="max-w-[600px] text-white/90 mx-auto xl:mx-0">{skills.description}</p>
                          </div>
                          </FadeIn>
                          
                          {/* Skill Cards */}
                          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto px-2 sm:px-4">
                            <FadeIn delay={0}>
                            <div className="bg-black/50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/10 hover:border-accent/50 transition-all duration-300">
                                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                                    {skills.skillCategories[0].icon}
                                </div>
                                <h4 className="text-lg sm:text-xl font-bold text-white">{skills.skillCategories[0].title}</h4>
                                </div>
                                <ul className="space-y-1 sm:space-y-2">
                                {skills.skillCategories[0].items.map((item, idx) => (
                                    <li key={idx} className="text-white/70 text-sm sm:text-base">
                                        • {item}
                                    </li>
                                ))}
                                </ul>
                            </div>
                            </FadeIn>
                            <FadeIn delay={0.1}>
                            <div className="bg-black/50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/10 hover:border-accent/50 transition-all duration-300">
                                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                                    {skills.skillCategories[1].icon}
                                </div>
                                <h4 className="text-lg sm:text-xl font-bold text-white">{skills.skillCategories[1].title}</h4>
                                </div>
                                <ul className="space-y-1 sm:space-y-2">
                                {skills.skillCategories[1].items.map((item, idx) => (
                                    <li key={idx} className="text-white/70 text-sm sm:text-base">
                                        • {item}
                                    </li>
                                ))}
                                </ul>
                            </div>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                            <div className="bg-black/50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/10 hover:border-accent/50 transition-all duration-300">
                                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                                    {skills.skillCategories[2].icon}
                                </div>
                                <h4 className="text-lg sm:text-xl font-bold text-white">{skills.skillCategories[2].title}</h4>
                                </div>
                                <ul className="space-y-1 sm:space-y-2">
                                {skills.skillCategories[2].items.map((item, idx) => (
                                    <li key={idx} className="text-white/70 text-sm sm:text-base">
                                        • {item}
                                    </li>
                                ))}
                                </ul>
                            </div>
                            </FadeIn>
                          </div>
                        </div>
                      </TabsContent>
                    </div>

                </Tabs>
                </FadeIn>
            </div>
        </div>
    )
}

export default Summary;
