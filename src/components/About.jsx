import React from 'react';
import  {Tilt}  from 'react-tilt';
import { motion } from 'framer-motion';
import {styles} from '../style';
import { services } from '../constant';
import{fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc';
const ServiceCard=({index,title,icon})=>{
return(
<Tilt className="xs:w-[250px] w-full">
<motion.div variants={fadeIn("right","spring",0.5*index,1,0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
<div options={{
  max:45,
  scale:1,
  speed:450
}} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
>
<img src={icon} alt={title} className="w-16 h-16 object-contain"  /><h3 className="text-white font-bold text-center text-[20px]">{title}</h3>
</div>

</motion.div>
</Tilt>
)

}

const About = () => {
  return (
<>
<motion.div variants={textVariant()}>
<p className={styles.sectionSubText}>Introduction</p>
<h2 className={styles.sectionHeadText}>Overview</h2>
</motion.div>
<motion.p
className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
variants={fadeIn("","",0.1,1)}
>
I'm  a skilled  software developer  with experience in Javascript and Typescript, and expertise  in frameworks like React,Node.js,and  Three.js
. I'm quick learner and collaborate quickly with clients to create user-friendly solution that solve real world problem.
Let's learn  and work together to bring idea in your life!!  

</motion.p>
<div className="mt-20 flex flex-wrap gap-10">
{services.map((service,index)=>(<ServiceCard key={service.title} index={index} {...service} />
))}
</div>

</>  
  )
}

export default About