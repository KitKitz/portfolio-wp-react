import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function useGsapProjectsAnim(
  isLoaded,
  prjClicked,
  projectsContainer,
  imageProject,
  imageProjectOverlay
) {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  // function to handle the timeout and ScrollTrigger refresh
  function handleTimeoutRefresh(config = {}) {
    const timeout = gsap
      .delayedCall(config.timeout || 1, ScrollTrigger.refresh)
      .pause();
    timeout.restart(true);
  }

  useGSAP(
    () => {
      if (!isLoaded) return;

      let projects = gsap.utils.toArray(projectsContainer);

      projects.forEach((project) => {
        let image = project.querySelector(imageProject);
        let overlay = project.querySelector(imageProjectOverlay);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: project,
            start: "top 55%",
            toggleActions: "restart none none reverse",
          },
        });

        tl.fromTo(
          overlay,
          {
            xPercent: 0,
          },

          {
            duration: 1.5,
            xPercent: -105,

            ease: "power4.out",
          }
        );

        tl.fromTo(
          image,
          {
            scale: 1.3,
          },
          {
            xPercent: 0,
            duration: 1.5,
            delay: -1.5,
            scale: 1,
            ease: "power4",
          }
        );
      });
      handleTimeoutRefresh({ timeout: 1 });
    },
    { dependencies: [isLoaded, prjClicked] }
  );
}
