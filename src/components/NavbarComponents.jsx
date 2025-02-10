import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  FiHome,
  FiStar,
  FiBriefcase,
  FiDollarSign,
  // FiBookOpen,
  FiMessageSquare,
  FiUsers,
} from "react-icons/fi";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-scroll";
const NavbarComponents = () => {
  const navItems = [
    { name: "Home", icon: FiHome, path: "home" },
    { name: "About", icon: FiStar, path: "about" },
    { name: "Demo", icon: FiDollarSign, path: "portfolio" },
    { name: "Services", icon: FiBriefcase, path: "service" },
    { name: "Testimonial", icon: FiUsers, path: "testimonial" },
    // { name: "Blog", icon: FiBookOpen, path: "blog" },
    { name: "Contact", icon: FiMessageSquare, path: "contact" },
  ];

  const [openMenu, setOpenMenu] = useState(true);

  const handleClcik = () => {
    setOpenMenu(false);
    gsap.fromTo(
      ".navbar",
      { y: -20 },
      { y: 0, duration: 1, stagger: 0.1, delay: 0.2, ease: "power2.out" }
    );
  };
  const handleClose = () => {
    setOpenMenu(true);
  };

  const [scrollNav, setScrollNav] = useState(true);

  useEffect(() => {
    const scrollBottom = () => {
      if (window.scrollY > 20) {
        setScrollNav(false);
      } else {
        setScrollNav(true);
      }
    };

    const navClick = document.querySelectorAll(".nav-click");

    const clickNavItems = () => {
      setOpenMenu(true);
    };

    navClick.forEach((item) => {
      item.addEventListener("click", clickNavItems);
    });
    window.addEventListener("scroll", scrollBottom);
  }, []);

  return (
    <section
      className={`fixed z-40 w-full bg-white ${
        scrollNav ? "shadow-none" : "shadow-md"
      } duration-300 ease-in-out`}
    >
      <div className="max-w-7xl m-auto px-5 py-7 flex items-center justify-between">
        <div data-aos="fade-left" data-aos-duration="1000">
          <a
            href="#"
            className="text-neutral-900 font-inter font-bold tracking-wider text-2xl lg:text-3xl"
          >
            Rund<span>Web</span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item, i) => (
            <Link
              to={item.path}
              smooth={true}
              duration={500}
              offset={-50}
              key={i}
              className="rounded-sm font-inter text-neutral-900 hover:text-blue-600 py-1 duration-500 ease-in-out cursor-pointer"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div
          className="hidden md:inline-block"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <a href="" className="button-black">
            purchase now
          </a>
        </div>

        {/* mobile version */}
        <div
          className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer md:hidden"
          onClick={handleClcik}
        >
          <HiMenuAlt4 className="text-blue-600 text-2xl" />
        </div>
        <div
          className={`fixed-layer bg-white flex flex-col gap-5 px-5 py-7 ${
            openMenu ? "-top-[125%]" : "top-0"
          } duration-700 ease-linear md:hidden shadow-lg`}
        >
          <div className="flex items-center justify-between">
            <div className="navbar">
              <a
                href="#"
                className="text-neutral-900 font-inter font-bold tracking-wide text-2xl"
              >
                Rund<span>Web</span>
              </a>
            </div>
            <div
              className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer navbar"
              onClick={handleClose}
            >
              <AiOutlineClose className="text-blue-600 text-xl" />
            </div>
          </div>
          <div className="flex flex-col">
            {navItems.map((item, i) => (
              <Link
                to={item.path}
                smooth={true}
                duration={500}
                offset={-50}
                key={i}
                className="flex items-center gap-5 text-neutral-900 font-inter tracking-wide font-medium py-2 navbar cursor-pointer nav-click"
              >
                <item.icon className="text-2xl" />
                <span className="text-neutral-900 text-xl">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavbarComponents;
