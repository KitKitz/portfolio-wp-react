import { useState } from "react";
import { isMobile } from "react-device-detect";
import useFetch from "../utils/useFetch";
import { HashLink } from "react-router-hash-link";
import RotatingTechStack from "../components/RotatingTechStack";

function Hero({ basePath }) {
  const fullPath = basePath + "/pages/7?_embed&acf_format=standard";
  const { data, isLoaded } = useFetch(fullPath);
  const [isCircleRotating, setIsCircleRotating] = useState(true);

  //highlight "web developer"
  const intro = data.acf?.intro;
  const heading = data.title?.rendered;

  const modifiedIntro = intro?.replace(
    /web developer/gi,
    (match) => `<span class="highlight">${match}</span>`
  );

  // const modifiedHeading = heading?.replace(
  //   /Kate/gi,
  //   (match) => `<span class="highlight">${match}</span>`
  // );

  //interaction with the rotating techstack circle

  function toggleRotateCircle() {
    setIsCircleRotating((prevState) => !prevState);
  }

  return (
    <>
      {isLoaded && (
        <>
          <section className="mx-4">
            <div className="flex flex-col md:w-[85%] md:mx-auto md:mt-24 lg:w-[78%] ">
              <h1
                className="relative overflow-hidden text-accent font-display text-clamp2 leading-tight md:leading-none "
                // dangerouslySetInnerHTML={{ __html: modifiedHeading }}
              >
                {data.title.rendered}
              </h1>
              <p
                className="relative inline-block overflow-hidden pt-2 text-sm font-light indent-14 w-[90%] self-center md:w-[85%] md:self-start md:text-md md:mt-4 lg:w-[65%] lg:text-lg"
                dangerouslySetInnerHTML={{ __html: modifiedIntro }}
              ></p>

              <HashLink
                smooth
                to="/#projects"
                className="xs:self-end  md:mt-10  lg:-mt-10"
              >
                <div
                  onMouseEnter={!isMobile && toggleRotateCircle}
                  onMouseLeave={!isMobile && toggleRotateCircle}
                  className="relative mt-16 w-[14rem] h-[14rem] mx-auto xs:mx-4  md:w-[16rem] md:h-[16rem] "
                >
                  <RotatingTechStack
                    basePath={basePath}
                    isCircleRotating={isCircleRotating}
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
                    <div
                      className="font-sans 
                    text-md leading-tight flex flex-col md:text-lg 
                    text-accent"
                    >
                      <span className="text-grey lg:text-md italic font-light">
                        to my
                      </span>
                      <span className="font-display uppercase">Projects</span>
                    </div>
                  </div>
                </div>
              </HashLink>
            </div>
          </section>
        </>
      )}
    </>
  );
}
export default Hero;
