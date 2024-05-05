import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import SkillCard from "../small_comp/SkillCard";

const iconlist = [
  {
    icon: <FaReact />,
    color: "text-[#149eca]",
    name: "React",
  },
  {
    icon: <FaHtml5 />,
    color: "text-[#e54c21]",
    name: "HTML",
  },
  {
    icon: <RiJavascriptFill />,
    color: "text-[#ecda1d]",
    name: "Javascript",
  },
  {
    icon: <FaCss3Alt />,
    color: "text-[#254bdd]",
    name: "CSS",
  },
  {
    icon: <SiRedux />,
    color: "text-[#7248b6]",
    name: "Redux",
  },
  {
    icon: <SiTailwindcss />,
    color: "text-[#36b6f2]",
    name: "Tailwind",
  },
  {
    icon: <SiMongodb />,
    color: "text-[#419432]",
    name: "Mongo",
  },
  {
    icon: <FaNode />,
    color: "text-[#7cb700]",
    name: "Node",
  },
  {
    icon: <FaGitAlt />,
    color: "text-[#f05033]",
    name: "Git",
  },
];

const Skills = () => {
  return (
    <div id="Skills" className="h-full w-full md:mt-5 flex flex-col">
      <hr className="md:hidden m-10 w-5/6 mx-auto" />
      <div className="md:text-5xl text-4xl text-center lg:text-left text-white md:py-12">
        Skills
      </div>
      <div className="flex mt-10 md:mt-0 gap-y-5 flex-wrap gap-2 justify-center md:justify-start">
        {iconlist.map((el, index) => {
          return <SkillCard key={index} el={el} />;
        })}
      </div>
    </div>
  );
};

export default Skills;

// <div className="row-span-5 h-fit w-fit mr-8 p-4 flex flex-wrap gap-y-8 gap-6">
//   {iconlist.map((el, index) => {
//     return <SkillCard key={index} el={el} />;
//   })}
// </div>
