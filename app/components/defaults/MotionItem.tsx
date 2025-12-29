"use client";
import { motion } from "motion/react";
import React from "react";

const MotionItem = ({
  children,
  className,
  initial,
  animate,
  whileInView,
  exit,
}: {
  children: React.ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  whileInView?: any;
  exit?: any;
}) => {
  return (
    <motion.div
      initial={initial}
      exit={exit}
      animate={animate}
      whileInView={whileInView}
      className={`${className || ""}`}
    >
      {children}
    </motion.div>
  );
};

export default MotionItem;
