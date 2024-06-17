import PageTransition from "../components/PageTransition";
import SectionsCounter from "../components/SectionsCounter";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

function Home({ basePath }) {
  return (
    <>
      <main>
        <PageTransition />
        <div className="sm:w-[90%] mx-auto">
          <SectionsCounter />
          <Hero basePath={basePath} />
          <About basePath={basePath} />
          <Projects basePath={basePath} isInsideProjectPage={false} />
        </div>
      </main>
      <footer>
        <Contact basePath={basePath} />
      </footer>
    </>
  );
}
export default Home;
