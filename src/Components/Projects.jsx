// import pic1 from "../assets/pic1.jpg";
const Projects = () => {
  return (
    <div id="Projects" className="h-full w-full md:mt-5 flex flex-col">
      <hr className="md:hidden m-10 w-5/6 mx-auto" />

      <div className="md:text-5xl text-4xl text-center lg:text-left text-white md:py-12">
        Projects
      </div>
      <div className="grow justify-center">
        <ul className="flex gap-2 custom-scrollbar scrollbar-thumb list-none h-fit overflow-x-scroll py-[20px] scroll-m-4 snap-x snap-mandatory scroll-p-7 px-0 mx-10">
          <li className="grow-0 shrink-0 basis-[250px] snap-center">
            <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-md">
              <div className="relative">
                <img
                  className="w-full h-64 object-cover"
                  src="https://picsum.photos/100/100"
                  alt="Image"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Product Sale</h3>
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam bibendum auctor felis, vel consequat odio ullamcorper
                  eu.
                </p>
              </div>
            </div>
          </li>
          <li className="grow-0 shrink-0 basis-[250px] snap-center">
            <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-md">
              <div className="relative">
                <img
                  className="w-full h-64 object-cover"
                  src="https://picsum.photos/100/100"
                  alt="Image"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Product Sale</h3>
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam bibendum auctor felis, vel consequat odio ullamcorper
                  eu.
                </p>
              </div>
            </div>
          </li>
          <li className="grow-0 shrink-0 basis-[250px] snap-center">
            <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-md">
              <div className="relative">
                <img
                  className="w-full h-64 object-cover"
                  src="https://picsum.photos/100/100"
                  alt="Image"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Product Sale</h3>
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam bibendum auctor felis, vel consequat odio ullamcorper
                  eu.
                </p>
              </div>
            </div>
          </li>
          <li className="grow-0 shrink-0 basis-[250px] snap-center">
            <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-md">
              <div className="relative">
                <img
                  className="w-full h-64 object-cover"
                  src="https://picsum.photos/100/100"
                  alt="Image"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Product Sale</h3>
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam bibendum auctor felis, vel consequat odio ullamcorper
                  eu.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
