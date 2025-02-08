import { GoArrowUpRight } from "react-icons/go";
const HomeComponents = () => {
  return (
    <section className="w-full min-h-screen bg-cover bg-no-repeat bg-center max-w-7xl m-auto p-5 flex items-center justify-center pt-14">
      <div className="flex items-center flex-col justify-center gap-8">
        <div className="max-w-6xl">
          <h1 className="text-center font-extrabold font-montserrat text-neutral-800 text-4xl tracking-wide md:text-5xl lg:text-6xl">
            High-Converting Landing Pages That Boost Your <span className="text-stroke">Business!</span>
          </h1>
        </div>
        <p className="text-neutral-800/90 text-center font-normal tracking-wide font-inter max-w-xl">
          We create modern, fast, and SEO-optimized landing pages designed to
          turn visitors into customers.
        </p>
        <div className="flex flex-wrap w-full items-center justify-center gap-2">
          <a href="" className="button-black gap-2">
            View Demo
            <GoArrowUpRight className="text-2xl"/>
          </a>
          <a href="" className="button-black gap-2">
            Start Now
            <GoArrowUpRight className="text-2xl"/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeComponents;
