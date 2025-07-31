import { useHoverSlice } from "../store/store";
import { useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

export const useMousePosition = (s) => {
  const { size, setSize } = useHoverSlice();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const Hover = (Size) => ({
    onMouseEnter: useCallback(() => {
      setSize(Size);
    }, []),
    onMouseLeave: useCallback(() => {
      setSize(s);
    }, []),
  });

  return { size, x: mousePosition.x, y: mousePosition.y, Hover };
};

export const useRaiseUp = (target, start = 0, end = 1, distance = 1) => {
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [start, end], [0, -15 * distance]);
  const md = useTransform(scrollYProgress, [start, end], [0, -25 * distance]);
  const lg = useTransform(scrollYProgress, [start, end], [0, -35 * distance]);
  return { sm, md, lg };
};

export const useScrollOpacity = (
  target,
  start = 0,
  end = 1,
  opacityStart = 0,
  opacityEnd = 1
) => {
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [start, end],
    [opacityStart, opacityEnd]
  );

  return opacity;
};

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return screenSize;
};

export const useMountDelay = (delay = 5000) => {
  const [isReady, setIsReady] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Set timeout when component mounts
    timeoutRef.current = setTimeout(() => {
      setIsReady(true);
    }, delay);

    // Cleanup on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [delay]);

  return isReady;
};

export const useSleep = (delay = 3000) => {
  const [isReady, setIsReady] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Set timeout when component mounts
    timeoutRef.current = setTimeout(() => {
      setIsReady(true);
    }, delay);

    // Cleanup on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [delay]);
  return isReady;
};
