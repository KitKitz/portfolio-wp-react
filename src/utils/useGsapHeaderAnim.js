import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export default function useGsapHeaderAnim(isLoaded, headerClassname) {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useGSAP(
    () => {
      if (!isLoaded) return;

      const text = new SplitType(`.${headerClassname}`, { types: "chars" });
      const chars = text.chars;

      gsap.fromTo(
        chars,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.8,
          ease: "power4.out",

          scrollTrigger: {
            trigger: `.${headerClassname}`,
            start: "bottom 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { dependencies: [isLoaded] }
  );
}
