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
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const menuLinksAnim = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.075 * i,
    },
  }),

  exit: (i) => ({
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.0125 * i,
    },
  }),
};

// framer motion & animation imports

export default function Menu({ toggleMenu }) {
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Insights",
      href: "/insights",
    },
    {
      label: "Work",
      href: "/work",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    // The parent div goes on top of the children div so I cant interact with the child div
    <motion.div
      variants={opacity}
      initial="opacity"
      animate="open"
      exit="closed"
      className="fixed z-50 flex h-screen w-screen bg-black  bg-opacity-20 backdrop-blur"
    >
      <motion.div
        variants={menuAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="backdrop-blur-4xl relative z-20 m-2 max-w-xl rounded-md bg-black"
      >
        <nav className="flex h-full flex-col justify-center gap-y-5 px-20 text-6xl font-bold text-cream">
          {links.map((link, index) => {
            return (
              <motion.a
                custom={index}
                variants={menuLinksAnim}
                initial="initial"
                animate="animate"
                exit="exit"
                key={index}
                href={link.href}
              >
                {link.label}
              </motion.a>
            );
          })}
        </nav>
        <button
          onClick={toggleMenu}
          className="absolute right-5 top-5 rounded-full bg-cream px-7 py-7"
        >
          <span>
            <motion.span
              variants={opacity}
              className=" absolute h-fit overflow-hidden text-sm opacity-0"
            >
              <span className="relative flex flex-col items-center justify-center">
                <span className="absolute flex h-20 w-20 items-center justify-center bg-cream text-black transition-all duration-500 ease-in-out group-hover:-translate-y-2 group-hover:opacity-0">
                  close
                </span>
                <span className="ease-[cubic-bezier(0, 0.55, 0.45, 1)] absolute flex h-20 w-20 translate-y-20 items-center justify-center rounded-full bg-brown transition-all duration-[400ms] group-hover:translate-y-0 group-hover:opacity-100">
                  close
                </span>
              </span>
            </motion.span>
          </span>
        </button>
      </motion.div>
    </motion.div>
  );
}
