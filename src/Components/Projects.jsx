import ProjectCard from "../small_comp/ProjectCard";
import logo from "../assets/logo.png";
import image1 from "../assets/image1.png";
import image from "../assets/image.png";

// import pic1 from "../assets/pic1.jpg";
const Projects = () => {
  const project_array = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZecMggX5KTy0-zpTYxJIvstegV9-3HgiEw&s",
      name: "Weather App",
      description:
        "A weather app built using React is a web application designed to display realtime weather information for a specific location. It leverages an external weather API to retrieve data and presents it in a user-friendly, visually appealing manner.",
    },
    {
      img: logo,
      name: "Stylz Clothing",
      description:
        "Developed a responsive e-commerce website using React JS, incorporating Redux for state management and React Router. Successfully implemented features like user  authentication, product search, and shopping cart functionality.",
    },
    {
      img: image1,
      name: "Connect 4",
      description:
        "Connect Four is a classic two-player game where the objective is to be the first to connect four of your colored discs in a row, either horizontally, vertically, or diagonally, on a grid.It consist of 4x4 grid",
    },
    {
      img: image,
      name: "Far Away Travel",
      description:
        "Travel FarAway is a packing list application designed to streamline the packing process for travelers.Whether you're preparing for a weekend getaway or a month-long adventure,It ensures you never forget an essential item again.",
    },
  ];

  return (
    <div id="Projects" className="h-full w-full md:mt-5 flex flex-col">
      <hr className="md:hidden m-10 w-5/6 mx-auto" />

      <div className="md:text-5xl text-4xl text-center lg:text-left text-white md:py-12">
        Projects
      </div>
      <div className="grow justify-center">
        <ul className="flex gap-2 grow custom-scrollbar scrollbar-thumb list-none h-fit overflow-x-scroll py-[20px] scroll-m-4 snap-x snap-mandatory scroll-p-7 px-0 mx-10">
          {project_array.map((el, index) => {
            return <ProjectCard key={index} project={el} />;
          })}
          {/* <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard /> */}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
