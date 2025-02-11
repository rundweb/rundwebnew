import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
const LoaderComponents = () => {
  const text = "RUNDWEB";
  const textRef = useRef();
  useEffect(() => {
    if (textRef.current) {
      const textWord = textRef.current.querySelectorAll("span");
      const tl = gsap.timeline();
      tl.fromTo(
        textWord,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" }
      ).to(textWord, {
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, []);

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    gsap.fromTo(
      ".box-top",
      { y: 0 },
      { y: "-100%", duration: 1, delay: 2, ease: "power2.out" }
    );

    gsap.fromTo(
      ".box-bottom",
      { y: 0 },
      { y: "100%", duration: 1, delay: 2, ease: "power2.out" }
    );
    setTimeout(() => {
      setLoader(false);
    }, 3200);
  }, []);
  return (
    <section
      className={`z-[100] fixed w-full min-h-screen items-center justify-center font-inter font-black flex-col ${
        loader ? "flex" : "hidden"
      }`}
    >
      <div className="absolute z-[70] top-0 left-0 w-full h-[50%] bg-blue-500 box-top"></div>
      <h1 className="text-5xl tracking-wide relative z-[80]" ref={textRef}>
        {text.split("").map((char, i) => (
          <span key={i} className="inline-block text-white">
            {char}
          </span>
        ))}
      </h1>
      <div className="absolute z-[70] bottom-0 left-0 w-full h-[50%] bg-blue-500 box-bottom"></div>
    </section>
  );
};

export default LoaderComponents;
