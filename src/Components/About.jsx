const About = () => {
  return (
    <div id="About" className="h-full w-full flex flex-col">
      <hr className="md:hidden m-10 w-5/6 mx-auto" />

      <div className="md:text-5xl text-4xl text-center lg:text-left text-white md:py-12">
        About <span className="text-[#facc15]">me</span>
      </div>
      <div className="flex flex-col justify-around md:flex-row grow">
        <div className="md:w-1/2 flex flex-col rounded-xl bg-gray-800 m-4">
          <div className="text-4xl text-white m-5">Experience</div>
          <hr />
          <ul className="m-5 font-font1 text-md font-bold md:font-semibold md:text-xl flex flex-col">
            <li className="">
              <div className="h-fit bg-yellow-400  text-[#2b364c] rounded-t-lg text-center">
                Senior Systems Engineer
              </div>
              <div className="h-fit bg-[#2b364c] md:text-base text-[#facc15] rounded-b-lg text-center">
                Infosys | Sept 2021 - Present | Pune
              </div>
            </li>
          </ul>
        </div>

        <div className="md:w-1/2  flex flex-col rounded-xl bg-gray-800 m-4 ">
          <div className="text-4xl text-white m-5">Education</div>
          <hr />
          <ul className="m-5 font-font1 text-sm font-bold md:font-semibold md:text-xl flex gap-5 flex-col">
            <li className="">
              <div className="h-fit bg-yellow-400  text-[#2b364c] rounded-t-lg text-center">
                Bachelor Of Engineering
              </div>
              <div className="h-fit bg-[#2b364c] md:text-base text-[#facc15] rounded-b-lg text-center">
                D Y Patil College Of Engineering | 2017 - 2021 | Pune
              </div>
            </li>
            <li className="">
              <div className="h-fit bg-yellow-400  text-[#2b364c] rounded-t-lg text-center">
                Higher Secondary School
              </div>
              <div className="h-fit bg-[#2b364c] md:text-base text-[#facc15] rounded-b-lg text-center">
                Dawale College of Arts And Science | 2015 - 2017 | Akola
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

// <div id="About" className="h-full w-full">
//   <div className=" md:text-6xl text-4xl text-center lg:text-left sm:pb-10 lg:pb-0 text-white">
//     About <span className="text-[#facc15]">me</span>
//   </div>
//   <div className="row-start-2 font-font1 text-white text-4xl gap-4 row-span-5 flex justify-start w-full p-4">
//     <div className="list-disc w-1/2 grid grid-cols-2 grid-rows-6">
//       <li>Experience</li>
//       <div className="col-span-2 text-black rounded-lg shadow-current shadow  font-bold text-xl my-4 mx-4 h-fit flex flex-col">
//         <div className="h-fit bg-yellow-400  text-[#2b364c] rounded-t-lg text-center">
//           Senior Systems Engineer
//         </div>
//         <div className="h-fit bg-[#2b364c] text-[#facc15] rounded-b-lg text-center">
//           Infosys | Sept 2021 - Present | Pune, India
//         </div>
//       </div>
//     </div>

//     <div className="h-full border-l-2 border-gray-600" />

//     <div className="list-disc w-1/2 grid  grid-cols-2 grid-rows-6">
//       <li>Education</li>
//       <div className="col-span-2 text-black rounded-lg shadow-current shadow  font-bold text-xl my-4 mx-4 h-fit flex flex-col">
//         <div className="h-fit bg-yellow-400  text-[#2b364c] rounded-t-lg text-center">
//           Bachelor Of Engineering
//         </div>
//         <div className="h-fit bg-[#2b364c] text-[#facc15] text-base tetx-wrap rounded-b-lg text-center">
//           D Y Patil College Of Engineering | Aug 2017 - June 2021 | Pune,
//           India
//         </div>
//       </div>
//       <div className="col-span-2 text-black rounded-lg shadow-current shadow  font-bold my-4 mx-4 h-fit flex flex-col">
//         <div className="h-fit bg-yellow-400  text-xl text-[#2b364c] rounded-t-lg text-center">
//           Higher Secondary School
//         </div>
//         <div className="h-fit bg-[#2b364c] text-[#facc15] text-base rounded-b-lg text-center">
//           Shri Dawale College of Arts And Science | 2015 - 2017 | Akola,
//           India
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
{
  /* <motion.button
  style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
              transition: "transform 500ms linear",
            }}
            whileHover={{
              rotateY: 180,
            }}
            className="text-lg shadow-md shadow-black text-black font-bold w-[175px] col-start-1 row-start-2 h-[250px] relative cursor-pointer"
            >
            <div
            style={{ backfaceVisibility: "hidden" }}
            className=" bg-pink-200 rounded-lg p-[0.5em] absolute inset-0 grid place-content-center"
            >
            <div>Senior Systems Engineer</div>
            <div> Infosys</div>
            </div>
            <motion.div
            animate={{ rotateY: 180 }}
            style={{ backfaceVisibility: "hidden" }}
            className="bg-blue-200 rounded-lg p-[0.5em] absolute inset-0 grid place-content-center"
            >
            <div>Sept 2021-Present</div> <div>Pune, India</div>
            </motion.div>
          </motion.button> */
}
