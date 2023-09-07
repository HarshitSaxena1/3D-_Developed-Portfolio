import React from 'react'
import { useState,useRef } from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
const formRef=useRef();
const [form,setForm]=useState({
  name:'',
  email:'',
  message:'',
});
const [loading, setLoading] = useState(false);
const handleChange=(e) =>{
  const {name,value}=e.target;
  setForm({...form,[name]:value})
}
const handleSubmit=(e) =>{
  e.preventDefault();
  setLoading(true);
  emailjs.send(
  'service_178m4ho',
  'template_o527nij',
  {
    from_name:form.name,
    to_name:'Harshit',
    from_email:form.email,
    to_email:'harshitsaxena912003@gmail.com',
    message:form.message,
  },
  '0D09Kz5eBjP-B-C2V'
  )
  .then(()=>{
    setLoading(false);
    alert('Thankyou. I will get back as soon as Possible.');

    setForm({
name:'',
email:'',
message:'',
})
, (error)=>{
  setLoading(false)
  console.log(error)
  alert('Something Went Wrong.')
}
  })

}

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
    <motion.div 
    variants={slideIn('left',"tween",0.2,1)}
    className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
    >
    <p className={styles.sectionSubText}>Get in Touch</p>
    <h3 className={styles.sectionHeadText}>Contact.</h3>
    <form
      ref={formRef}
      onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
    <label className="flex flex-col">
    <span className="text-white font-medium mb-4 ">Your Name</span>
    <input
    type="text"
    name="name"
    value={form.name}
    onChange={handleChange}
    placeholder="What's your Name?"
    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
    
    </label>
    <label className="flex flex-col">
    <span className="text-white font-medium mb-4 ">Your Email</span>
    <input
    type="email"
    name="email"
    value={form.email}
    onChange={handleChange}
    placeholder="What's your Email?"
    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
    
    </label>
    <label className="flex flex-col">
    <span className="text-white font-medium mb-4 ">Your Message</span>
    <textarea
    rows="7"
    name="message"
    value={form.message}
    onChange={handleChange}
    placeholder="What's do you want to say?"
    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
    
    </label>
<button className="bg-tertiary  py-3 px-8 text-white font-bold shadow-md shadow-primary rounded-xl outline-none w-fit "
type="submit"
>{loading ? 'Sending...' : 'Send'}
</button>
 </form>
    </motion.div>
    <motion.div variants={slideIn('right',"tween",0.2,1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350] ">
    <EarthCanvas />
    </motion.div>
    </div>
  )
}

export default Contact