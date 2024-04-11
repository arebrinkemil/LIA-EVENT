import React, { useState, useRef, useEffect } from "react";

const FromOffscreenSection = ({ children, direction, fullHeight }) => {
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

  // Add 'h-full' to the class list if fullHeight is true
  const sectionClasses = `transition ease-in-out duration-1000 ${
    isVisible ? "" : translateClass
  } ${fullHeight ? "h-full" : ""}`;

  return (
    <div ref={ref} className={sectionClasses}>
      {children}
    </div>
  );
};

export default FromOffscreenSection;
