import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function useGsapHeaderAnim(isLoaded, word) {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useGSAP(
    () => {
      if (!isLoaded) return;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: word,
            scrub: 0.5,
            start: "top 60%",
          },
        })

        .to(word, {
          width: "100%",
          duration: 5,
          ease: "none",
          stagger: 10,
        });
    },
    { dependencies: [isLoaded] }
  );
}
