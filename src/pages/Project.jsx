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
        <main className="sm:px-2.5">
          <PageTransition />
          <SectionsCounter />
          <ProjectInfo basePath={basePath} slug={slug} />
          <Projects
            basePath={basePath}
            currentPrj={slug}
            isInsideProjectPage={true}
            sansH="See More"
            displayH="Projects"
          />
        </main>
        <footer>
          <Contact basePath={basePath} />
        </footer>
      </>
    </>
  );
}
export default Project;
