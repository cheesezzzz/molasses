import { motion } from "framer-motion";
import { opacity } from "../utils/opacity";

const menuAnimation = {
  initial: {
    width: "0",
  },
  animate: {
    // inherit property allows the it to inherit the width of the parent container
    opacity: 1,
    width: "inherit",
    transition: { duration: 1.15, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    
    opacity: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1]},
  },
};

// framer motion & animation imports

export default function Menu({toggleMenu}) {
  

  const links = [
    {
      label: "About",
      href: "/",
    },
    {
      label: "Insights",
      href: "/",
    },
    {
      label: "Work",
      href: "/",
    },
    {
      label: "Contact",
      href: "/",
    },
  ];

  return (
    // The parent div goes on top of the children div so I cant interact with the child div
    <motion.div onClick={toggleMenu} variants={opacity} initial="opacity" animate="open" exit="closed" className="fixed z-50 flex h-screen w-screen bg-black  bg-opacity-20 backdrop-blur">
      <motion.div
        layout
        variants={menuAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="backdrop-blur-4xl relative z-20 m-2 max-w-2xl flex rounded-md bg-black"
      >
        <button onClick={toggleMenu} className="absolute rounded-full top-2 right-2 bg-cream px-7 py-7">

        </button>
      </motion.div>
    </motion.div>
  );
}
