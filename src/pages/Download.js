import React from "react";
import { motion } from "framer-motion";
import Pdf from "../components/Pdf";

const Download = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Pdf />
    </motion.div>
  );
};

export default Download;
