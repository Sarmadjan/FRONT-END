
import { motion } from 'framer-motion';

const MyComponent = () => {
  // Use Framer Motion here
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{delay:2}}
    >
     <h1>
        HELLO WORLD AND MORE
     </h1>
    </motion.div>
  );
};
export default MyComponent;