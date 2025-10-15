"use client"

import Image from "next/image";
import Head from "next/head";
import { IoEyeSharp } from "react-icons/io5";
import { FaComments } from "react-icons/fa";

import { motion } from 'motion/react'

import { Carousel } from "../components/ui/carousel";
import EmblaCarousel from "./ui/emblaCarousel";
import { useState } from "react";

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Bento({initialVariant}) {


  const [variant, setVariant] = useState(initialVariant);


   const changeVariant = () => {
    setVariant(prev => (prev === 1 ? 2 : 1));
    console.log('Changing variant...');
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,     // wait before starting children
        staggerChildren: 0.2,   // time between each tile
      },
    },
  };

  const tile = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const toptile = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const bottomtile = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const title = "Project Title"
  const client = "Client Name"
  const role = "Graphic Designer"
  const tools = "Adobe Illustrator, Photoshop, Figma"
  const overview = "Briefly describe the project’s goal and what the client needed."
  const challenge = "State the main design problem or creative challenge."
  const solution = "Summarize how you approached the design and what you created."
  const result = "Share measurable or visual outcomes."
  return (


   
      <motion.div variants={container} key={variant} initial="hidden" animate="visible" exit={{ opacity: 0, y: 50 }} className="grid dark:text-black  lg:w-[55rem] sm:grid-cols-1 md:grid-cols-3 gap-2 p-2 w-full">
       
       
       
     
       { variant === 1 ? (

        <>
        <motion.div variants={toptile} initial="hidden" animate="visible"  className="shadow-[-1px_1px_20px_5px_rgba(0,_0,_0,_0.1)] relative bg-amber-50 lg:col-span-3 h-[6rem] flex items-center justify-center rounded-md overflow-hidden">

            <span id="brand">Brand Logo Here</span>

        </motion.div>
        <motion.div variants={tile} initial="hidden" animate="visible" className="shadow-[-1px_1px_20px_5px_rgba(0,_0,_0,_0.1)] relative bg-amber-50  lg:row-span-2 p-4  text-center flex flex-col items-center gap-4 rounded-md overflow-hidden">


          <h2>About Designer</h2>
          <p>
          A detail-oriented graphic designer with a strong background in marketing and communications. Experienced in developing and managing brand campaigns across digital and traditional media.
          </p>
          <p>
          Skilled in design software like Adobe Creative Suite and proficient in crafting visuals that drive engagement, brand awareness, and business growth.          </p>

          <button className="border bg-[#a7a130] text-white hover:bg-amber-200 w-[10rem] p-2 rounded-md">Work With Me</button>

        </motion.div>
        <motion.div initial={{y: -80, opacity: 1, scale: 0.5}} whileInView={{y:0, opacity: 1, scale: 1}} className="shadow-[-1px_1px_20px_5px_rgba(0,_0,_0,_0.1)] bg-amber-50  relative aspect-square rounded-md overflow-hidden">

          <Image src="/greyscale.png" alt="Photo" fill className="object-cover object-fit" />

        
        </motion.div>
        <motion.div variants={tile} initial="hidden" animate="visible" className="shadow-[-1px_1px_20px_5px_rgba(0,_0,_0,_0.1)] bg-amber-50 text-center  p-4 relative lg:row-span-2  rounded-md overflow-hidden">

          <h2>Recent Work</h2>

          <EmblaCarousel  slides={SLIDES} options={OPTIONS} />
          <button onClick={changeVariant} className="border bg-[#a7a130] mt-6 text-white hover:bg-amber-200 w-[10rem] p-2 rounded-md">View More</button>




        </motion.div>
        <motion.div variants={tile} initial="hidden" animate="visible"  className="shadow-[-1px_1px_20px_5px_rgba(0,_0,_0,_0.1)] bg-amber-50  relative  text-center  aspect-square rounded-md overflow-hidden">

          <span id="tagline" className="absolute bottom-[3rem]  right-[12rem] w-[5rem] lg:bottom-[1rem] text-3xl">Creativity is the greatest rebellion in existence.</span>


          <Image src="/butterfly.svg" width={100} height={50} alt="Photo"  className="absolute top-6 right-3" />

        </motion.div>
        
        <motion.div variants={bottomtile} initial="hidden" animate="visible"  className="shadow-[-1px_1px_20px_5px_rgba(0,_0,_0,_0.1)] bg-amber-50  relative flex justify-center items-center lg:col-span-3 h-[6rem] rounded-md overflow-hidden">

          <ul className="flex gap-8 items-center">
            <li className="cursor-pointer hover:scale-125">
              Instagram
            </li>
            <li className="cursor-pointer hover:scale-125">
              Facebook
            </li>
            <li className="cursor-pointer hover:scale-125">
              Tik Tok
            </li>
          </ul>

        </motion.div>
        </>
        ) : (

          <>
          <motion.div variants={toptile} initial="hidden" animate="visible"  className="shadow-[-1px_1px_20px_5px_rgba(0,_0,_0,_0.1)] relative bg-amber-50 lg:col-span-3 h-[6rem] flex items-center justify-center rounded-md overflow-hidden">
  
              <span id="brand">Project Name</span>
  
          </motion.div>
          <motion.div variants={tile} key={variant} initial="hidden" animate="visible" className="shadow-[-1px_1px_20px_5px_rgba(0,_0,_0,_0.1)] relative bg-amber-50  lg:row-span-2 p-4  text-center flex flex-col items-center gap-4 rounded-md overflow-hidden">
  
  
            <h2>Case Study</h2>
            <section className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-2xl mb-2">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <div className="text-sm text-gray-600 mb-4 space-y-1">
        <p><strong>Client:</strong> {client}</p>
        <p><strong>Role:</strong> {role}</p>
        <p><strong>Tools:</strong> {tools}</p>
      </div>

      <div className="space-y-2 text-gray-800 leading-relaxed">
        <div>
          <h3 className="font-semibold text-lg">Overview</h3>
          <p>{overview}</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Challenge</h3>
          <p>{challenge}</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Solution</h3>
          <p>{solution}</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Result</h3>
          <p>{result}</p>
        </div>
      </div>
            </section>
  
          </motion.div>
          <motion.div initial={{y: -80, opacity: 1, scale: 0.5}} whileInView={{y:0, opacity: 1, scale: 1}} className="shadow-[-1px_1px_20px_5px_rgba(0,_0,_0,_0.1)] bg-amber-50  relative aspect-square rounded-md overflow-hidden">
  
            <Image src="/mockup.jpeg" alt="Photo" fill className="object-cover object-fit" />
  
          
          </motion.div>
          <motion.div variants={tile} initial="hidden" animate="visible" className="shadow-[-1px_1px_20px_5px_rgba(0,_0,_0,_0.1)] bg-amber-50 text-center  p-4 relative lg:row-span-2 gap-8 rounded-md overflow-hidden">
  
            <h2>Assets</h2>
  
            <EmblaCarousel  slides={SLIDES} options={OPTIONS} />


            <button onClick={changeVariant}  className="border bg-[#a7a130] text-white hover:bg-amber-200 mt-12 w-[10rem] p-2 rounded-md">Back</button>

  
  
  
          </motion.div>
          <motion.div variants={tile} initial="hidden" animate="visible"  className="shadow-[-1px_1px_20px_5px_rgba(0,_0,_0,_0.1)] bg-amber-50  relative  text-center  aspect-square rounded-md overflow-hidden">
  
            <span id="tagline" className="absolute bottom-[3rem]  right-[12rem] w-[5rem] lg:bottom-[1rem] text-3xl">Creativity is the greatest rebellion in existence.</span>
  
            
  
            <Image src="/butterfly.svg" width={100} height={50} alt="Photo"  className="absolute top-6 right-3" />
  
          </motion.div>
          
          <motion.div variants={bottomtile} initial="hidden" animate="visible"  className="shadow-[-1px_1px_20px_5px_rgba(0,_0,_0,_0.1)] bg-amber-50  relative flex justify-center items-center lg:col-span-3 h-[6rem] rounded-md overflow-hidden">
  
            <ul className="flex gap-8 items-center">
              <li className="cursor-pointer hover:scale-125">
                Instagram
              </li>
              <li className="cursor-pointer hover:scale-125">
                Facebook
              </li>
              <li className="cursor-pointer hover:scale-125">
                Tik Tok
              </li>
            </ul>
  
          </motion.div>
          </>

        )}
        
       
      </motion.div>
    
  );
}
