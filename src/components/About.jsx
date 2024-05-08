import {styles} from "../styles.js";
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {services} from "../constants/index.js";
import {fadeIn,textVariant} from "../utils/motion.js";
import {SectionWrapper} from "../hoc";
const ServiceCard = ({index, title, icon}) => {
    return (
        <Tilt className={"xs:w-[250px] w-full"}>
            <motion.div
            variants={fadeIn(
                "right","spring",0.5*index,
                0.75
            )}
            className="w-full green-pink-gradient p-[1px]
            rounded-[20px] shadow-card"
            >
                <div
                options={{
                    max:45,
                    scale:1,
                    speed:450
                }}
                className="bg-tertiary
                rounded-[20px]
                py-5
                px-12
                min-h-[280px]
                flex
                justify-evenly items-center
                flex-col
                "
                >
                    <img src={icon} alt={title}
                         className='w-16 h-16 object-contain'/>
                    <h3
                    className="text-white text-[20px]
                    font-bold text-center"
                    >{title}</h3>
                </div>

            </motion.div>
        </Tilt>
    );
}; // Added semicolon to end the function declaration

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>
                    Introduction
                </p>
                <h2 className={styles.sectionHeadText}>
                    Overview
                </h2>
            </motion.div>
            <motion.p
                variants={
                    fadeIn("","",0.1,1)
                }
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                With expertise in Python, Firebase, React, and more, I've contributed as a Teaching Assistant at the University of the Pacific, guiding students and preparing materials on object-oriented programming.
                In this role, I organized quizzes and assignments to reinforce learning.
                <br/>
                Additionally, I've volunteered for Oasis Care, Edible School Yard Community Farm, Blood Bank in India, Stockton Pet Care, and Food Bank Stockton.
                My volunteering involved various community services, showcasing my commitment to making a positive impact beyond academia.
            </motion.p>
            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service,index)=>(
                    <ServiceCard
                        key={service.title}
                        index={index} // Fixed the placement of index prop
                        title={service.title} // Added title prop
                        icon={service.icon} // Added icon prop
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");