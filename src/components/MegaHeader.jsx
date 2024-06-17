import useGsapHeaderAnim from "../utils/useGsapHeaderAnim";

function MegaHeader({ isLoaded, animClassname, index, sansH, displayH }) {
  useGsapHeaderAnim(isLoaded, animClassname);

  return (
    <>
      {isLoaded && (
        <h2
          className={` ${animClassname} my-36 text-clamp2 text-center mx-auto leading-tight sm:w-[85%] lg:my-48`}
        >
          <span className="mr-2 text-micro">{index}</span>
          {sansH}
          <span className="ml-4 text-accent font-display text-clamp3 line-clamp-2">
            {displayH}
          </span>
        </h2>
      )}
    </>
  );
}
export default MegaHeader;
