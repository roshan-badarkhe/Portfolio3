// import pic1 from "../assets/pic1.jpg";
const Projects = () => {
  return (
    <div id="Projects" className="">
      <div className="bg-cover bg-no-repeat rounded-lg shadow-md overflow-hidden max-w-sm mx-auto relative">
        <img
          // src={pic1}
          className="w-full h-full absolute inset-0 object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 flex justify-center items-center">
          <div className="bg-black opacity-50 hover:opacity-75 rounded-b-lg px-4 py-2">
            <p className="text-xl font-bold text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              doloremque modi atque aperiam nobis optio ipsam ducimus temporibus
              quisquam voluptas doloribus, porro, adipisci reiciendis, sapiente
              in aliquid corrupti assumenda culpa?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
