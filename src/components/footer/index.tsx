import { AnimatePresence, motion } from "framer-motion"; // Updated import
import { CiMenuKebab } from "react-icons/ci";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router";
import Content from "./content";
import clsx from "clsx";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [home, setHome] = useState(false);
  const [isContentInView, setIsContentInView] = useState(true); // Track content visibility
  const contentRef = useRef(null); // Reference to the content div
  const location = useLocation();

  useEffect(() => {
    const isHome = location.pathname === "/";
    setHome(isHome);
  }, [location.pathname]);

  // Set up Intersection Observer to monitor content div visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContentInView(entry.isIntersecting);
      },
      {
        root: null, // Use viewport as root
        threshold: 0.1, // Trigger when 10% of the content div is visible
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, [isOpen, home]); // Re-run when isOpen or home changes

  return (
    <motion.footer
      exit={{ translateY: 100, transition: { duration: 0.6 } }} // Adjusted duration for smoother exit
      className={clsx(
        "space-y-5",
        { "absolute bottom-0 right-0 left-0 mx-5 hidden md:block": home },
        { "static block": !home }
      )}
    >
      <AnimatePresence mode="wait">
        {home && (
          <motion.button
            key="menu-button"
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: isOpen && !isContentInView ? 100 : 0,
              opacity: 1,
            }}
            exit={{ y: 100, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              duration: 3,
            }}
            onClick={() => setIsOpen((prev) => !prev)}
            className={clsx(
              "size-10 rounded-full flex items-center justify-center bg-white-green text-chicago-800 mb-5"
            )}
          >
            <CiMenuKebab className="text-2xl" />
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isOpen && home && (
          <motion.div
            ref={contentRef}
            key="content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
            className="bg-chicago-800 text-white"
          >
            <Content />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.footer>
  );
};

export default Index;
