export const motionEffect = (direction: "left" | "right" | "top" | "bottom" = "left") => {
  let initialX = 0;
  let initialY = 0;

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
  }

  return {
    initial: { opacity: 0, x: initialX, y: initialY },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 60,
      damping: 15,
      duration: 0.8,
      ease: "easeInOut",
    },
    viewport: { once: true },
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
          ease: "easeInOut",
        },
      },
    },
    item: {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.4,
          ease: "easeInOut",
        },
      },
    },
  };
};
