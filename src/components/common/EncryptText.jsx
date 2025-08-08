import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const EncryptButton = ({
  TxT,
  cycles = 4,
  shuffle = 30,
  className,
  symbols = false,
  lowercase = false,
}) => {
  const CHARS = symbols
    ? " ! @ # $ % & ( ) : { } ; | < > /?"
    : lowercase
    ? "abcdefghijklmnopqrstuvwxyz"
    : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const intervalRef = useRef(null);
  const target = useRef(null);
  const isInView = useInView(target);

  const [isScrumbling, setIsScrumbling] = useState(false);

  useEffect(() => {
    if (isInView) {
      scramble();
      setTimeout(() => {
        stopScramble;
      }, 400);
    }
  }, [isInView, TxT]);

  const [text, setText] = useState(TxT);

  const scramble = () => {
    if (isScrumbling) {
      stopScramble();
      return;
    }
    setIsScrumbling(true);

    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TxT.split("")
        .map((char, index) => {
          if (pos / cycles > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TxT.length * cycles) {
        stopScramble();
      }
    }, shuffle);
  };

  const stopScramble = () => {
    setIsScrumbling(false);
    clearInterval(intervalRef.current || undefined);

    setText(TxT);
  };

  return (
    <motion.button
      ref={target}
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className={`group relative overflow-hidden rounded-lg   px-4 py-2 tracking-wide font-medium  transition-colors  ${className} ${
        !lowercase && "uppercase"
      }`}
    >
      <div className="relative z-10 flex items-center gap-2">
        <span>{text}</span>
      </div>
    </motion.button>
  );
};
