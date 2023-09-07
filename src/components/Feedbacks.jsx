import React from 'react'
import { motion } from 'framer-motion'
import {styles} from '../style'
import { SectionWrapper } from '../hoc'
import { fadeIn,textVariant } from '../utils/motion'
import { testimonials } from '../constant'

const FeedbackCard =({index,testimonial,name,designation,company,image}) => (
  <motion.div
  variants={fadeIn("","spring",index * 0.5,0.75)}
  className="bg-black p-10 rounded-3xl xs:w-[320px] w-full">
  <p className="text-white font-black text-[48px]">"</p>
  <div className="mt-0"><p className="text-white  font-bold">{testimonial}</p>
  <div className="mt-7 gap-1  items-center justify-between flex ">
  <div className="flex-1 flex flex-col">
  <p>
  <span className="blue-text-gradient">@</span>{name}
  </p>
  <p>{designation} of {company}</p>
  </div>
  <img src={image} alt={`feedback-by-${name}`} className="w-10 h-10 rounded-full object-cover" />
  </div>
  </div>
  </motion.div>

)





const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] "><div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
    <motion.div
    variants={textVariant()}>
    <p className={styles.sectionSubText}>What other Day</p>
    <h2 className={styles.sectionHeadText}>Testimonials.</h2>
    </motion.div>
    </div>
    <div className={`${styles.paddingX} -mt-20 pb-14 flex gap-7  flex-wrap`}>
    {testimonials.map((testimonial,index)=> (
<FeedbackCard
key={testimonial.name}
index={index} 
{...testimonial}
/>
    ))}
    </div>
    </div>
  )
}

export default Feedbacks