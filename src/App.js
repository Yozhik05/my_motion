import "./styles.css";
import { motion, MotionConfig } from "framer-motion";
import { useState } from "react";

export const TextView = ({ children }) => {
  const color =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

  const textHoverConfig = {
    fontSize: "40px",
    color: color
  };
  const textInitialConfig = {
    fontSize: "30px"
  };
  return (
    <motion.span initial={textInitialConfig} whileHover={textHoverConfig}>
      {children}
    </motion.span>
  );
};

export default function App() {
  const HoverAnimation = {
    scale: 2
  };

  return (
    <div className="App">
      <motion.div className="welcome-text">
        <motion.div>
          <TextView>Welcome </TextView>
          <TextView>to </TextView>
          <TextView>my </TextView>
          <TextView>page </TextView>
        </motion.div>
        <motion.div>
          <TextView>Magomedov </TextView>
          <TextView>Shamil</TextView>
        </motion.div>
      </motion.div>
      <TextView></TextView>
      <TextView></TextView>
      <TextView></TextView>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
