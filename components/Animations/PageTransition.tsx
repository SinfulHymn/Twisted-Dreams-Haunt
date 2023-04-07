import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const variants = {
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.56,
      // delay: 0.08,
    },
  },
  out: {
    opacity: 0,
    scale: 1.05,
    y: -50,
    transition: {
      duration: 0.56,
    },
  },
};

const Transition = ({ children }) => {
  const { asPath } = useRouter();
  return (
    <div className="relative flex flex-grow flex-col overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          variants={variants}
          key={asPath}
          animate="in"
          initial="out"
          exit="out"
          className="relative flex flex-grow flex-col"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
