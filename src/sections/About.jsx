import useFetch from "../utils/useFetch";
import useGsapTextAnim from "../utils/useGsapTextAnim";

function About({ basePath }) {
  const fullPath = basePath + "/pages/14?_embed&acf_format=standard";
  const { data, isLoaded } = useFetch(fullPath);

  //animate the about paragraph
  const aboutPar1 = data.acf?.highlight_1;
  const aboutPar2 = data.acf?.highlight_2;

  const aboutParWordsArray1 = aboutPar1?.split(" ");
  const aboutParWordsArray2 = aboutPar2?.split(" ");

  useGsapTextAnim(isLoaded, ".animateWords");

  return (
    <>
      {isLoaded && (
        <section
          className="px-4 overflow-hidden mt-36 lg:mt-[14rem] "
          id="about"
        >
          <h2 className="mb-12 sm:mb-24  text-grey">
            <span className="mr-2">02.</span>
            {data.title.rendered}
          </h2>

          <div className="text-clamp3rem font-sans tracking-[-0.02em] font-light ">
            <p className=" pb-12 flex flex-wrap gap-x-2 text-greyDark sm:mx-6 lg:pb-24">
              {aboutParWordsArray1.map((word, i) => (
                <span key={i} className={`relative flex items-center`}>
                  {word}
                  <span className="animateWords absolute inset-0 overflow-hidden w-0 text-grey">
                    {word}
                  </span>
                </span>
              ))}
            </p>
            <p className=" flex flex-wrap gap-x-2 text-greyDark  sm:mx-6">
              {aboutParWordsArray2.map((word, i) => (
                <span key={i} className={`relative flex items-center`}>
                  {word}
                  <span className="animateWords absolute left-0 overflow-hidden w-0 text-accent">
                    {word}
                  </span>
                </span>
              ))}
            </p>
          </div>
        </section>
      )}
    </>
  );
}
export default About;
