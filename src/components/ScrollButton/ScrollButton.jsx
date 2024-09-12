import React, { useEffect, useState } from "react";
import styles from "./ScrollButton.module.css";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        // Adjust the value as necessary
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This enables smooth scrolling
    });
  };
  return (
    <div>
      {isVisible == true ? (
        <FaArrowCircleUp
          size={30}
          onClick={scrollToTop}
          className={styles.scrolbut}
        />
      ) : null}
    </div>
  );
};

export default ScrollButton;
