import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function PageTransition() {
  const loadingBg1 = useRef();
  const loadingBg2 = useRef();

  useGSAP(() => {
    gsap
      .timeline()
      .to(
        loadingBg1.current,
        {
          duration: 1.8,
          yPercent: -100,
          ease: "power3.inOut",
        },
        "+=0.5"
      )
      .to(
        loadingBg2.current,
        {
          duration: 2,
          yPercent: -100,
          ease: "power4.inOut",
        },
        "-=1.8"
      );
  }, []);

  return (
    <>
      <div
        ref={loadingBg1}
        className="bg-black absolute z-[10000] w-screen h-screen top-0 left-0 aria-hidden"
      ></div>
      <div
        ref={loadingBg2}
        className="bg-accent absolute z-[9000] w-screen h-screen top-0 left-0"
      ></div>
    </>
  );
}

export default PageTransition;
