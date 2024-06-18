import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import ClickComponent from "./ClickComponent";

function ProjectAccordionItem({ title, description_1, description_2, code }) {
  const [isOpen, setIsOpen] = useState(null);

  function handleItemClick() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <section className="relative text-sm pt-12 lg:pb-16  lg:max-w-[68rem] mx-auto lg:text-md">
      <h3 className="text-clamp3rem text-accent leading-tight ">{title}</h3>
      <p className="pt-12 pb-8 font-light lg:pt-16">{description_1}</p>
      <p className="pb-10 font-light lg:pb-12">{description_2}</p>
      {code && (
        <>
          <ClickComponent
            as="button"
            className="gradientBtn w-[16rem]"
            onClick={handleItemClick}
          >
            {isOpen ? "Hide " : "See "} Snippet
          </ClickComponent>

          <div className={`${isOpen ? "block " : "hidden"}`}>
            <div className="bg-black text-grey px-6 ">
              <SyntaxHighlighter
                language="javascript"
                style={vscDarkPlus}
                showLineNumbers={true}
                wrapLongLines={true}
                className="highlight-code"
                customStyle={{
                  backgroundColor: "#212121",
                  marginTop: "2rem",
                  padding: "1rem",
                  border: "1px solid #484848",
                  borderRadius: "1rem",
                  flexBasis: "55%",
                  height: "35rem",
                }}
              >
                {code}
              </SyntaxHighlighter>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
export default ProjectAccordionItem;
