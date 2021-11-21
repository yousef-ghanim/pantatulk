import React from "react";
import { motion } from "framer-motion";
import Policy from "../components/Policy";

const Rules = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Policy />
    </motion.div>
  );
};

export default Rules;
