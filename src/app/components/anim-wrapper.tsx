import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, FC } from "react";

interface ILayoutProps {
  children: ReactNode;
}

const AnimWrapper: FC<ILayoutProps> = ({ children }) => {
  return (
    <AnimatePresence mode={"wait"}>
      <motion.div
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          type: "tween",
          duration: 0.9,
        }}
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {
            opacity: 0,
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimWrapper;
