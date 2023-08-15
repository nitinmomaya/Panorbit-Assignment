import { FiChevronRight } from "react-icons/fi";

const SideBarItem = ({ ItemName, state }) => {
  return (
    <>
      <div className="w-full gap-4 flex  py-1">
        <h1
          className={
            state
              ? "text-white py-2  w-full border-b border-gray-400  font-semibold"
              : "w-full  border-b border-gray-400 py-2 text-slate-300 "
          }
        >
          {ItemName}
        </h1>
        <div
          className={
            state
              ? "w-8 h-8 flex bg-slate-50 items-center justify-center rounded-l-lg "
              : "invisible"
          }
        >
          <FiChevronRight className="text-slate-500 w-4 h-4" />
        </div>
      </div>
    </>
  );
};

export default SideBarItem;
