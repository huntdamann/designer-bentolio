"use client"

import Image from "next/image";
import Head from "next/head";
import { IoEyeSharp } from "react-icons/io5";
import { FaComments } from "react-icons/fa";

import { motion } from 'motion/react'

import { Carousel } from "../components/ui/carousel";



export default function Bento({photo, photo1, photo2, photo3}) {


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

  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>

      <motion.div variants={container} initial="hidden" animate="visible" className="grid  lg:w-[55rem] sm:grid-cols-1 md:grid-cols-3 gap-2 p-2 w-full">
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
        
       
      </motion.div>
    </>
  );
}
