import gifMaintenance from "../assets/giphy.gif";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
const MaintenanceComponents = () => {
  return (
    <div className="flex items-center flex-col gap-5 text-center font-inter">
      <div>
        <img src={gifMaintenance} alt="" className="max-w-[300px] sm:max-w-md rounded-lg" />
      </div>
      <div className=" flex flex-col gap-2 items-center justify-center">
        <h1 className="text-neutral-800 font-semibold text-xl tracking-wide">Our site is under maintenance.</h1>
        <p className="text-neutral-800/90 tracking-wide text-sm max-w-sm sm:max-w-md">
          Our website is currently undergoing schedule maintenance. We
          appreciate your patience and will be back soon! if you have any urgent
          matters, please contact us
        </p>
        <a href="" className="text-neutral-800 font-medium tracking-wide border-b-2 w-max border-blue-500 flex  items-center gap-2 mt-3"><HiOutlineArrowSmLeft className="text-xl"/> Go Home</a>
      </div>
    </div>
  );
};

export default MaintenanceComponents;
