import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Rules from "./pages/Rules";
import Download from "./pages/Download";
import Error from "./pages/Error";
import Footer from "./components/Footer/index";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route path="/rules">
            <Rules />
          </Route>
          <Route path="/form">
            <Download />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
