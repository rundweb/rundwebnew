import { GoArrowUpRight } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa6";
import icons1 from "../assets/tailwind.svg";
import icons2 from "../assets/react.svg";
import icons3 from "../assets/gsap.svg";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
const HomeComponents = () => {
  const iconItems = [icons1, icons2, icons3];
  return (
    <section
      id="home"
      className="w-full bg-home min-h-screen bg-cover bg-no-repeat bg-center p-5 flex items-center justify-center pt-20"
    >
      <div className="flex items-center flex-col justify-center gap-7 mt-5">
        <div
          className="border-[1px] border-gray-100 p-1 rounded-full items-center justify-between font-inter gap-2 hidden sm:flex"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="bg-blue-600 px-2 rounded-full">
            <h1 className="text-white text-sm">New</h1>
          </div>
          <h1 className="text-neutral-900 text-sm font-medium tracking-wide">
            Landing page business released!
          </h1>
          <FaAngleRight className="text-blue-600" />
        </div>
        <div className="max-w-5xl" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="uppercase text-center font-extrabold font-montserrat text-neutral-800 text-4xl tracking-wide md:text-5xl lg:text-6xl ">
            Modern Digital Solutions for Your{" "}
            <span>
              <Typewriter
                words={["Business", "Company","Portfolio"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
        <p
          className="text-neutral-800/90 text-center font-medium  tracking-wide font-inter max-w-xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          We create fast, modern, and responsive websites to help your business
          grow in the digital world.
        </p>
        <div className="flex flex-wrap w-full items-center justify-center gap-2">
          <div data-aos="fade-up" data-aos-duration="1000">
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-50}
              className="button-black gap-2 cursor-pointer"
            >
              Get Started
              <GoArrowUpRight className="text-2xl" />
            </Link>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-50}
              className="button-black gap-2 cursor-pointer"
            >
              Contact Us
              <GoArrowUpRight className="text-2xl" />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 mt-5">
          {iconItems.map((item, i) => (
            <div
              key={i}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center neophormise cursor-pointer group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={item}
                alt=""
                className="w-10 h-10 sm:w-12 sm:h-12 group-hover:rotate-[360deg] duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeComponents;
