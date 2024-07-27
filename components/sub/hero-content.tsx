"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const mailtoLink =
    "https://drive.google.com/file/d/1T3dOpkp8JEzHNSkKxqaWWAouBf-zFLXR/view?usp=sharing";
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Fullstack Developer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              the best
            </span>{" "}
            project experience.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          As a seasoned senior full-stack developer with over 5 years of
          professional experience in{" "}
          <span className="text-white font-bold">blockchain technology</span>, I
          have demonstrated a deep understanding of blockchain principles and
          applications while honing my{" "}
          <span className="text-white font-bold">front-end</span> and{" "}
          <span className="text-white font-bold">back-end</span>
          development skills. I have strong knowledge of developing
          decentralized applications,
          <span className="text-white font-bold">smart contracts</span> and
          implementing blockchain solutions for various industrie
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          // href={mailtoLink}
        >
          tristanarj88@outlook.com
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
      <Image
        src="/avatar.png"
        alt="work icons"
        height={350}
        width={350}
        draggable={false}
        className="select-none"
      />
    </motion.div>
  );
};
