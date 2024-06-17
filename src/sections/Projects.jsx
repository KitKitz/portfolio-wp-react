import useFetch from "../utils/useFetch";
import ProjectCard from "../components/ProjectCard";
import MegaHeader from "../components/MegaHeader";
import useGsapProjectsAnim from "../utils/useGsapProjectsAnim";

function Projects({
  basePath,
  currentPrj,
  sansH,
  displayH,
  isInsideProjectPage,
}) {
  const fullPath = basePath + "/posts?_embed&acf_format=standard";
  const { data, isLoaded } = useFetch(fullPath);

  const prjClicked = currentPrj || "";

  useGsapProjectsAnim(
    isLoaded,
    prjClicked,
    ".animateImageCont",
    ".animateImage",
    ".animateOverlay"
  );

  const sansHeader = isInsideProjectPage ? sansH : "Project";
  const displayHeader = isInsideProjectPage ? displayH : "Showcase";

  return (
    <>
      {isLoaded && (
        <>
          <section id="projects">
            <MegaHeader
              isLoaded={isLoaded}
              animClassname={"animateProjectsH2"}
              index={"03."}
              sansH={sansHeader}
              displayH={displayHeader}
            />

            <div className="flex flex-col gap-y-28 items-center lg:gap-y-40">
              {data
                .filter((project) => !currentPrj || project.slug !== currentPrj)
                .map((project, i) => (
                  <ProjectCard
                    key={project.id}
                    index={i}
                    title={project.title.rendered}
                    image={project.acf.desktop_img.url}
                    altText={project.acf.desktop_img.alt}
                    slug={project.slug}
                    terms={project._embedded["acf:term"]}
                    imageContClass={"animateImageCont"}
                    imageClass={"animateImage"}
                    imageOverlayClass={"animateOverlay"}
                  />
                ))}
            </div>
          </section>
        </>
      )}
    </>
  );
}
export default Projects;
