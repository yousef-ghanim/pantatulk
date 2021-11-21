import React from "react";
import { motion } from "framer-motion";
import Form from "../components/Form";

const Contact = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Form />
    </motion.div>
  );
};

export default Contact;
