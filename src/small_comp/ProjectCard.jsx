const ProjectCard = ({ project }) => {
  return (
    <li className="grow-0 shrink-0 basis-[250px] snap-center">
      <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-md">
        <div className="relative">
          <img
            className="w-full h-64 object-cover"
            src={project.img}
            alt="Image"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
          <p className="text-gray-700 text-xs">{project.description}</p>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
