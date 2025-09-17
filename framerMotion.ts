export const motionEffect = (direction = "left") => {
  let initialX = 0,
    initialY = 0;

  switch (direction) {
    case "left":
      initialX = -100;
      break;
    case "right":
      initialX = 100;
      break;
    case "top":
      initialY = -100;
      break;
    case "bottom":
      initialY = 100;
      break;
    default:
      initialX = -100;
  }

  return {
    initial: { opacity: 0, x: initialX, y: initialY },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: {
      delay: 0.2,
      x: { type: "spring", stiffness: 60, damping: 15 },
      y: { type: "spring", stiffness: 60, damping: 15 },
      opacity: { duration: 1 },
      ease: "easeInOut",
      duration: 1,
    },
  };
};

export const listContainer = () => {
  return {
    container: {
      hidden: { opacity: 1, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.4,
          staggerChildren: 0.2,
          duration: 0.2,
          ease: "easeInOut",
        },
      },
    },

    item: {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        duration: 0.1,
        transition: {
          ease: "easeInOut",
        },
      },
    },
  };
};