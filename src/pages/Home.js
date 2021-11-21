import React from "react";
import Hero from "../components/Hero/index";
import Services from "../components/Services/index";
import Clients from "../components/Clients";
import UpperFooter from "../components/UpperFooter";
import About from "../components/About";
import Staff from "../components/Staff";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Hero />
      <Clients />
      <Services />
      <About />
      <Staff />
      <UpperFooter />
    </motion.div>
  );
};

export default Home;
