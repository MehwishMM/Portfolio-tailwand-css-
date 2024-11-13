import React from 'react'
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container' >
     <div className='grid md:-cols-2 gap-10'>
     <div className= 'space-y-8' >
        <h2 className='text-5xl' data-aos="zoom-in-down">Stay connect with me</h2>
        <p className='text-yellow-500 text-[18px] pt-2' data-aos="zoom-in-down">
            Drop me a line ,give me a call ,or send me a message by submitting the form 
        </p>
        
        <div className='flex gap-3 items-center'data-aos="zoom-in-down">
        <SiGmail size={30} /> mashmazari@gmail.com
        </div>
        <div className='flex gap-3 items-centerdata-aos="zoom-in-down"'>
        <BsFillTelephoneFill size={30} />(0310-0000000)
        </div>
        
     </div>
     <div className= 'space-y-8'>
     <div  className='flex flex-col gap-1' >
         <label htmlFor="name">Name</label>
         <input type="text"
         className='h-[40px]bg-transparent border border-accent'
         id='name'/>
     
    </div>
    <div  className='flex flex-col gap-1'data-aos="zoom-in-down" >
         <label htmlFor="email">Email</label>
         <input type="text"
         className='h-[40px]bg-transparent border border-accent'
         id='email'/>
     
    </div>
    <div  className='flex flex-col gap-1'data-aos="zoom-in-down" >
         <label htmlFor="message">Message</label>
         <textarea 
         className='bg-transparent border border-accent'
         id='message' rows={8}>
         </textarea> 
    </div>
    <button
              type="submit"
              className="bg-accent p-2 px-6 hover:bg-accent-dark transition duration-300"
              data-aos="zoom-in-down"
            >
              Send
            </button>
    </div>
    </div>
    </div>
  )
}

export default Contact
