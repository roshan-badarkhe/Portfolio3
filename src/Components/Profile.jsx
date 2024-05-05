import Typewriter from "typewriter-effect";
import { FaAnglesDown } from "react-icons/fa6";
import { motion } from "framer-motion";

const Profile = ({ scrollToTarget }) => {
  return (
    <div
      id="Profile"
      className="h-full my-20 md:flex md:flex-col md:gap-4 md:my-0 w-full md:justify-center md:pr-10"
    >
      <motion.div
        initial={{
          y: -800,
        }}
        animate={{
          y: -20,
        }}
        transition={{
          // delay: 0.7,
          type: "spring",
          stiffness: 100,
        }}
        className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)] sm:text-3xl lg:text-5xl bg-clip-text
       text-transparent bg-gradient-to-r from-yellow-400
          to-orange-400 font-semibold
        font-font1 flex flex-col gap-4 md:pr-12 "
      >
        <div className="text-xl md:text-5xl">
          Hi there 👋, My Name is Roshan and I&apos;m a ‎
          <Typewriter
            options={{
              // strings: ["Sona", "Bubu", "Majha Baal"],
              strings: [
                "Web Developer",
                "React Developer",
                "Software Engineer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </motion.div>

      <div className=" lg:text-2xl  font-font3 text-slate-500">
        Welcome to the digital realm where seamless web experiences come to
        life! Here, innovation converges with functionality to create a
        captivating landscape of online possibilities. With every meticulously
        crafted line of code, ideas spring to life, forming the foundation for
        immersive and engaging web journeys. Explore this dynamic world and
        discover the endless potential that awaits.
      </div>

      <div className="hidden lg:flex text-2xl w-5/6 text-gray-300 lg:flex-col gap-6">
        <div className="flex justify-center">Want to know more about me?</div>
        <motion.div
          onClick={() => scrollToTarget("About")}
          animate={{ y: 20 }}
          transition={{
            repeatType: "reverse",
            repeat: Infinity,
            duration: 1,
          }}
          className="flex justify-center text-5xl cursor-pointer"
        >
          <FaAnglesDown />
        </motion.div>
      </div>
      {/* <hr className="md:hidden  relative top-10 w-4/5 flex mx-auto" /> */}
    </div>
  );
};

export default Profile;
