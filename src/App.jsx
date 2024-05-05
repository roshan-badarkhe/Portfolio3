import img3 from "./assets/img3.png";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Profile from "./Components/Profile";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contactme from "./Components/Contactme";
import Projects from "./Components/Projects";

function App() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ container: ref });
  // #111827

  // bg-[url('.\assets\pic1.jpg')]
  const iconlist = [
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/_roshan__98/",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/roshan-badarkhe",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/roshan-badarkhe",
    },
    {
      icon: <FaTwitter />,
      link: "https://twitter.com/roshan_badarkhe",
    },
  ];

  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  const scrollToTarget = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const array = ["Profile", "About", "Skills", "Projects", "Contact"];

  return (
    <div className="bg-[#111827]">
      <div className="flex flex-col md:h-screen mx-auto md:grid md:grid-cols-8">
        <div
          name="non-scrollable"
          className="h-full md:col-span-3 flex flex-col gap-8 m-auto pt-20"
        >
          <img
            src={img3}
            className="border-white border-4 rounded-full h-60 w-60"
            alt="profile_img"
          />
          <div className="flex gap-2 justify-center">
            {iconlist.map((el, index) => {
              return (
                <a
                  className="bg-slate-200 text-xl grid place-content-center hover:bg-gradient-to-r p-3 hover:from-purple-400 hover:to-red-300  rounded-2xl"
                  href={el.link}
                  target="_blank"
                  key={index}
                >
                  {el.icon}
                </a>
              );
            })}
          </div>
          <div className="hidden gap-1 md:flex md:justify-center">
            <div className="bg-yellow-300 shadow-lg w-0.5 rounded-t-lg rounded-b-lg">
              <motion.div
                whileHover={{ scale: 1.1, cursor: "pointer" }}
                animate={{ x: -1.9 }}
                style={{ translateY }}
                className="bg-[#facc15] w-1.5 shadow-lg shadow-yellow-400 rounded-t-lg rounded-b-lg h-1/6"
              />
            </div>
            <div className="flex flex-col text-medium gap-2 text-xl font-font1 font-bold text-color2">
              {array.map((el, index) => {
                return (
                  <motion.h1
                    key={index}
                    whileHover={{
                      type: "spring",
                      stiffness: 900,
                      scale: 1.2,
                      originX: 0,
                      color: "#facc15",
                    }}
                    onClick={() => scrollToTarget(el)}
                    className="mx-2 cursor-pointer bg-clip-text
                        text-transparent bg-[#facc15]"
                  >
                    {el}
                  </motion.h1>
                );
              })}
            </div>
          </div>
        </div>
        <div
          ref={ref}
          name="scrollable"
          className="h-full w-full md:col-span-5 md:snap-y md:snap-mandatory md:no-scrollbar md:overflow-x-hidden"
        >
          <div className="md:h-full md:w-full text-center md:text-left snap-start">
            <Profile scrollToTarget={scrollToTarget} />
          </div>
          <div className="md:h-full md:w-full snap-start">
            <About />
          </div>
          <div className="md:h-full md:w-full snap-start">
            <Skills />
          </div>
          <div className="md:h-full md:w-full snap-start">
            <Projects />
          </div>
          <div className="md:h-full md:w-full snap-start">
            <Contactme />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
