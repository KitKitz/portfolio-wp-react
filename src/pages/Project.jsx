import { useParams } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import SectionsCounter from "../components/SectionsCounter";
import ProjectInfo from "../sections/ProjectInfo";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

function Project({ basePath }) {
  const { slug } = useParams();

  return (
    <>
      <>
        <main>
          <PageTransition />
          <div className="sm:w-[90%] mx-auto">
            <SectionsCounter />
            <ProjectInfo basePath={basePath} slug={slug} />
            <Projects
              basePath={basePath}
              currentPrj={slug}
              isInsideProjectPage={true}
              sansH="See More"
              displayH="Projects"
            />
          </div>
        </main>
        <footer>
          <Contact basePath={basePath} />
        </footer>
      </>
    </>
  );
}
export default Project;
