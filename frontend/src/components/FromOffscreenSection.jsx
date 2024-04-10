import React, { useState, useRef, useEffect } from "react";

const FromOffscreenSection = ({ children, direction }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const translateClass =
    direction === "left" ? "-translate-x-48" : "translate-x-48";

  return (
    <div
      ref={ref}
      className={` transition ease-in-out duration-1000 ${
        isVisible ? "" : translateClass
      }`}
    >
      {children}
    </div>
  );
};

export default FromOffscreenSection;
