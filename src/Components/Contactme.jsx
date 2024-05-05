import { FaArrowLeftLong } from "react-icons/fa6";

const Contactme = () => {
  return (
    <div id="Contact" className="flex flex-col md:flex-row h-full">
      <hr className="my-8" />

      <div className="md:hidden flex justify-center text-white m-8 text-2xl font-font2">
        For any queries, Fill the form
      </div>
      <div className="hidden w-2/5 h-full text-4xl font-font1 pr-2 font-semibold text-gray-400 justify-center md:grid md:grid-rows-6">
        <div className="row-start-2 place-content-end">For any queries</div>
        <div className="my-2 row-start-3 flex flex-col gap-2">
          <div>Fill out this form.</div>
          <div className="text-6xl text-[#facc15]">OR</div>
        </div>
        <div className="row-start-4 flex gap-4">
          <div className="text-[#facc15]">
            <FaArrowLeftLong />
          </div>{" "}
          Connect me here
        </div>
      </div>
      <div className="md:w-3/5 w-full h-full flex flex-col justify-center">
        <div className="p-4 py-6 mx-auto rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
          <form>
            <div className="-mx-2 md:items-center md:flex">
              <div className="flex-1 px-2">
                <label className="block mb-2 text-center md:text-left text-sm text-gray-600 dark:text-gray-200">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John "
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-yellow-400 dark:focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="flex-1 px-2 mt-4 md:mt-0">
                <label className="block mb-2 text-center md:text-left text-sm text-gray-600 dark:text-gray-200">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-yellow-400 dark:focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-center md:text-left text-sm text-gray-600 dark:text-gray-200">
                Email address
              </label>
              <input
                type="email"
                placeholder="johndoe@example.com"
                className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-yellow-400 dark:focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-center md:text-left text-sm text-gray-600 dark:text-gray-200">
                Message
              </label>
              <textarea
                className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-yellow-400 dark:focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Message"
              ></textarea>
            </div>

            <button className="w-full px-6 py-3 mt-4 text-md font-medium text-[#1f2937] transition-colors duration-300 transform bg-[#facc15] rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-50">
              Get In Touch
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
