import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

// Direction options: 'left', 'right', 'up', 'down'
const ScrollReveal = ({
  children,
  direction = "left",
  delay = 0,
  threshold = 0.2,
  className = "",
}) => {
  const [ref, isVisible] = useScrollAnimation(threshold);

  // Define the starting transform based on direction
  const getStartTransform = () => {
    switch (direction) {
      case "left":
        return "translateX(-50px)";
      case "right":
        return "translateX(50px)";
      case "up":
        return "translateY(50px)";
      case "down":
        return "translateY(-50px)";
      default:
        return "translateX(-50px)";
    }
  };

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate(0)" : getStartTransform(),
    transition: `opacity 0.9s ease-out, transform 0.9s ease-out ${delay}s`,
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
