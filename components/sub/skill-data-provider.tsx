"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Tooltip from "@/components/sub/Tooltip";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <div className="items-center">
        <Tooltip content={name}>
          <button className="px-4 py-2 text-white">
            <Image
              className="hover:scale-95"
              src={`/skills/${src}`}
              width={width}
              height={height}
              alt={name}
            />
          </button>
        </Tooltip>
      </div>
    </motion.div>
  );
};
