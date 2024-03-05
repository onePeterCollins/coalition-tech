import { useState, useEffect } from "react";

const useScrollTrigger = (threshold: number) => {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > threshold) {
        setTriggered(true);
      } else {
        setTriggered(false);
      }
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return triggered;
};

export default useScrollTrigger;
