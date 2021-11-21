import React from "react";
import { motion } from "framer-motion";
import WrongPage from "../components/WrongPage";

const Error = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
    >
      <WrongPage />
    </motion.div>
  );
};

export default Error;
