import { HashLink } from "react-router-hash-link";
import ClickComponent from "./ClickComponent";

function ProjectCard({
  index,
  title,
  image,
  altText,
  slug,
  terms,
  imageContClass,
  imageClass,
  imageOverlayClass,
}) {
  return (
    <article className="px-3.5 sm:px-5 flex flex-col w-[18rem] xs:w-full md:flex-row  md:gap-x-12 lg:justify-center  xl:gap-x-24 ">
      <div
        className={`${imageContClass} relative basis-full overflow-hidden md:my-6 md:basis-7/12 xl:basis-1/2 
                    ${index % 2 !== 0 && "md:-order-1  "} `}
      >
        <div className=" h-full w-full">
          <div
            className={` ${imageOverlayClass} bg-accentAlt absolute w-full h-full z-[20]  `}
          ></div>
          <div className={`relative z-[10] h-full w-full overflow-hidden`}>
            <img
              src={image}
              alt={altText}
              className={`${imageClass} h-full w-full object-cover md:object-contain`}
            />
          </div>
        </div>
      </div>
      <div className="pt-8 flex justify-between xs:px-2 sm:pt-8 md:flex-col md:-order-1 md:items-center md:justify-center md:max-w-[40rem]">
        <div className="text-xs flex flex-col gap-y-6 2xl:gap-y-6 md:mb-4 lg:text-sm  lg:mb-8">
          <h3 className="font-light text-clampH3 leading-none ">{title}</h3>
          <ul className="font-light text-xs flex flex flex-wrap gap-2 md:text-base">
            {terms
              .map((term) => (
                <li
                  className="gradientPink py-2 px-5 rounded-full"
                  key={term.id}
                >
                  {term.name}
                </li>
              ))
              .reverse()
              .slice(0, 4)}
          </ul>

          <ClickComponent
            className="gradientBtn w-[14rem]"
            as={HashLink}
            to={`/projects/${slug}/#`}
          >
            Explore
          </ClickComponent>
        </div>
      </div>
    </article>
  );
}
export default ProjectCard;
