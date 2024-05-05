const SkillCard = ({ el }) => {
  return (
    <div className="flex flex-col gap-2 justify-center">
      <div
        className={`flex justify-center text-5xl w-fit bg-[#23272f] ${el.color} p-3 md:p-7 rounded-xl`}
      >
        {el.icon}
      </div>
      <div className="text-gray-400 md:text-2xl font-font2 flex justify-center">
        {el.name}
      </div>
    </div>
  );
};

export default SkillCard;

// <div
//   className={`md:text-7xl text-3xl cursor-pointer bg-[#23272f] hover:bg-[#1c2027] ${el.color} h-fit w-fit p-3 md:p-7 rounded-3xl`}
// >
//   {el.icon}
// </div>
// <div className="text-gray-400 md:text-2xl font-font2 flex justify-center">
//   {el.name}
// </div>
