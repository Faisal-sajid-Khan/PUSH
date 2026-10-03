import { motion } from "framer-motion";

export default function WordPullUp({
  words,
  trigger = true,
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  },
  framerProps = {
    hidden: { y: "100%", opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
    exit: { y: "-50%", opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  },
  className = "",
  style = {}
}) {
  return (
    <div className="overflow-hidden">
      <motion.h1
        variants={wrapperFramerProps}
        initial="hidden"
        animate={trigger ? "show" : "hidden"}
        exit="exit"
        className={className}
        style={style}
      >
        {words.split(" ").map((word, i) => (
          <motion.span
            key={i}
            variants={framerProps}
            style={{ display: "inline-block", paddingRight: "0.25em" }}
          >
            {word === "" ? <span>&nbsp;</span> : word}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
