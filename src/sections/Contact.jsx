import { useState, useEffect } from "react";
import useFetch from "../utils/useFetch";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact({ basePath }) {
  const fullPath = basePath + "/pages/78";
  const { data, isLoaded } = useFetch(fullPath);

  const [copiedEmail, setCopiedEmail] = useState("");
  const email = data.acf?.email;

  function copyEmail() {
    if (email) {
      navigator.clipboard.writeText(email);
      setCopiedEmail("Copied Successfully");
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopiedEmail("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [copiedEmail]);

  return (
    <>
      {isLoaded && (
        <footer
          className="px-2.5 bg-grey text-black font-medium pb-8 mt-36 md:flex md:flex-col md:items-center"
          id="contact"
        >
          <div className="w-[18rem] mx-auto pt-12 flex flex-row flex-wrap justify-center md:w-[24rem]">
            <button
              onClick={copyEmail}
              className="gradient w-[18rem] font-light text-grey gradientBtn hover:text-black  hover:font-normal text-lg mb-8 py-3 px-6 lg:mb-12"
            >
              {copiedEmail ? copiedEmail : "Copy Email"}
            </button>
            <a
              href={data.acf.linkedin.url}
              rel="noopener noreferrer"
              target="_blank"
              className="text-sm pr-8 flex items-center gap-2 hover:text-accentAlt md:text-md"
            >
              {data.acf.linkedin.title}
              <FaLinkedin size="1.2em" />
            </a>
            <a
              href={data.acf.github.url}
              rel="noopener noreferrer"
              target="_blank"
              className="text-sm flex items-center gap-2 hover:text-accentAlt md:text-md"
            >
              {data.acf.github.title}
              <FaGithub size="1.2em" />
            </a>
          </div>
          <p className="text-center text-micro  pt-16 w-full">
            &copy; 2024 Kate Khymochka{" "}
          </p>
        </footer>
      )}
    </>
  );
}
export default Contact;
