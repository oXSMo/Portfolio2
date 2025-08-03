import { AnimatePresence, motion } from "framer-motion";
import "../styles/globals.css";

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <main className="min-h-screen w-full">
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />;
        </AnimatePresence>
      </main>
    </>
  );
}
