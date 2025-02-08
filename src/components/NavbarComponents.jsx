import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  FiHome,
  FiStar,
  FiBriefcase,
  FiDollarSign,
  FiBookOpen,
  FiMessageSquare,
  FiUsers,
} from "react-icons/fi";
import { useEffect, useState } from "react";

const NavbarComponents = () => {
  const navItems = [
    { name: "Home", icon: FiHome, path: "/" },
    { name: "About", icon: FiStar, path: "/why-us" },
    { name: "Services", icon: FiBriefcase, path: "/services" },
    { name: "Pricing", icon: FiDollarSign, path: "/pricing" },
    { name: "Stories", icon: FiUsers, path: "/success-stories" },
    { name: "Blog", icon: FiBookOpen, path: "/blog" },
    { name: "Contact", icon: FiMessageSquare, path: "/contact" },
  ];

  const [openMenu, setOpenMenu] = useState(true);

  const handleClcik = () => {
    setOpenMenu(false);
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

    window.addEventListener("scroll", scrollBottom);
  }, []);
  return (
    <section
      className={`fixed z-40 w-full bg-white ${
        scrollNav ? "shadow-none" : "shadow-md"
      } duration-300 ease-in-out`}
    >
      <div className="max-w-7xl m-auto px-5 py-7 flex items-center justify-between">
        <div>
          <a
            href="#"
            className="text-neutral-900 font-inter font-bold tracking-wider text-2xl "
          >
            RundWeb
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item, i) => (
            <a
              href=""
              key={i}
              className="rounded-sm font-inter text-neutral-900 hover:bg-white/50 py-1 duration-500 ease-in-out"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden md:inline-block">
          <a href="" className="button-black">
            purchase now
          </a>
        </div>

        {/* mobile version */}
        <div
          className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer md:hidden"
          onClick={handleClcik}
        >
          <HiMenuAlt4 className="text-neutral-900 text-xl" />
        </div>
        <div
          className={`fixed-layer bg-white flex flex-col gap-5 px-5 py-7 ${
            openMenu ? "-top-[125%]" : "top-0"
          } duration-700 ease-in-out md:hidden`}
        >
          <div className="flex items-center justify-between">
            <div>
              <a
                href="#"
                className="text-neutral-900 font-inter font-bold tracking-wide text-2xl"
              >
                RundWeb
              </a>
            </div>
            <div
              className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer"
              onClick={handleClose}
            >
              <AiOutlineClose className="text-neutral-900 text-xl" />
            </div>
          </div>
          <div className="flex flex-col">
            {navItems.map((item, i) => (
              <a
                href={item.path}
                key={i}
                className="flex items-center gap-4 text-neutral-900/90 font-inter tracking-wide font-semibold border-b-2 py-2"
              >
                <item.icon className="text-xl" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavbarComponents;
