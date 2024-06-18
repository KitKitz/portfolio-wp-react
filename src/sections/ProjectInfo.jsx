import useFetch from "../utils/useFetch";
import { BsGithub } from "react-icons/bs";
import ProjectAccordionItem from "../components/ProjectAccordionItem";
import MegaHeader from "../components/MegaHeader";
import ClickComponent from "../components/ClickComponent";

function ProjectInfo({ basePath, slug }) {
  const fullPath = basePath + `/posts?slug=${slug}&_embed&acf_format=standard`;

  const { data, isLoaded } = useFetch(fullPath);
  const prj = data[0];

  return (
    <>
      {isLoaded && (
        <article id={`post-${prj.id}`} className="mx-4 pt-4">
          <h1 className="mb-20 font-display text-accent text-clamp1 leading-none md:w-[85%] md:mx-auto md:mt-24 ">
            {prj.title.rendered}
          </h1>
          <div className="mt-6 mb-24 md:mb-36 lg:flex lg:items-center 2xl:max-w-[95%] mx-auto gap-12 2xl:gap-24">
            <div className="mb-20 max-w-[43rem] mx-auto  lg:mb-0 ">
              <img
                src={prj.acf.desktop_img.url}
                alt={prj.acf.desktop_img.alt}
                className="h-full w-full object-cover md:object-contain"
              />
            </div>
            <div className="lg:max-w-[55%] 2xl:max-w-[45%]">
              <section>
                <h2 className="text-greyDark pb-4">Role</h2>
                <p className="text-sm">{prj.acf.role}</p>
              </section>
              <section className="py-12">
                <h2 className="text-greyDark pb-4">Toolkit</h2>
                <ul className="flex flex flex-wrap gap-2">
                  {prj._embedded["acf:term"]
                    .map((term) => (
                      <li className="gradientPink py-2 px-5 " key={term.id}>
                        {term.name}
                      </li>
                    ))
                    .reverse()}
                </ul>
              </section>
              <section className="w-full 3xl:max-w-[90%]">
                <h2 className="pb-4 text-greyDark">Overview</h2>
                <p className="text-sm font-light">{prj.acf.intro}</p>
              </section>
              <div className="md:flex gap-10">
                <ClickComponent
                  as="a"
                  href={prj.acf.link_to_live_site}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="gradientBtn w-[16rem] justify-center mt-10 mx-auto md:mx-0"
                >
                  Live Website
                </ClickComponent>

                <ClickComponent
                  as="a"
                  href={prj.acf.link_to_github}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="gradientBlend w-[16rem] text-grey justify-center font-normal mt-10 hover:border-none hover:text-black hover:font-medium mx-auto md:mx-0"
                >
                  GitHub Repo
                </ClickComponent>
              </div>
            </div>
          </div>

          <section className="mb-20">
            <MegaHeader
              isLoaded={isLoaded}
              animClassname={"animateHighlightsH2"}
              index={"02."}
              sansH={"Project"}
              displayH={"Highlights"}
            />
            <div className="mb-12">
              {prj.acf.project_highlights &&
                prj.acf.project_highlights.map((item, i) => (
                  <ProjectAccordionItem
                    key={i}
                    title={item.highlight_title}
                    description_1={item.highlight_description}
                    description_2={item.highlight_description_1}
                    code={item.highlight_code}
                  />
                ))}
            </div>
          </section>
        </article>
      )}
    </>
  );
}
export default ProjectInfo;
