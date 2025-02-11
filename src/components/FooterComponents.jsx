import { Link } from "react-scroll";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
const FooterComponents = () => {
  const companyItems = [
    {
      name: "Blog",
      path: "blog",
    },
    {
      name: "Pricing",
      path: "pricing",
    },
    {
      name: "Demo",
      path: "portfolio",
    },
  ];

  const resourceItems = [
    {
      name: "Documentation",
      path: "documentation",
    },
    {
      name: "Service",
      path: "service",
    },
    {
      name: "Testimonial",
      path: "testimonial",
    },
  ];

  const legalItems = [
    {
      name: "Terms of Service",
      path: "term",
    },
    {
      name: "Privacy Policy",
      path: "privacy",
    },
    {
      name: "Cookies Policy",
      path: "cookies",
    },
  ];

  const socialItems = [
    {
      icon: AiFillInstagram,
    },
    {
      icon: FaSquareFacebook,
    },
    {
      icon: FaTwitter,
    },
  ];
  return (
    <section className="bg-neutral-800 p-5 py-12 flex flex-col gap-10">
      <div className="max-w-7xl m-auto w-full flex flex-col gap-5 md:flex-row justify-between">
        <div className="flex flex-col gap-2 w-full">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-50}
            className="text-white font-inter font-bold tracking-wide text-xl"
          >
            RUND<span>WEB</span>
          </Link>
          <h1 className="text-white font-inter font-bold tracking-wide text-2xl max-w-xs">
            We help your business grow in the digital world
          </h1>
          <p className="text-white/80 tracking-wide font-inter font-medium text-sm">
            Jakarta, 2025
          </p>
        </div>
        <div className="flex flex-col gap-5 lg:gap-10 md:flex-row w-full justify-end">
          <div className="flex flex-col gap-1 text-white">
            <h1 className="font-inter font-semibold text-lg">Company</h1>
            {companyItems.map((item, i) => (
              <Link
                to={item.path}
                smooth={true}
                duration={500}
                offset={-50}
                key={i}
                className="text-white/80 tracking-wide hover:text-blue-600 duration-300 ease-in-out cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-1 text-white">
            <h1 className="font-inter font-semibold text-lg">Resources</h1>
            {resourceItems.map((item, i) => (
              <Link
                to={item.path}
                smooth={true}
                duration={500}
                offset={-50}
                key={i}
                className="text-white/80 tracking-wide hover:text-blue-600 duration-300 ease-in-out cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-1 text-white">
            <h1 className="font-inter font-semibold text-lg">Legal</h1>
            {legalItems.map((item, i) => (
              <Link
                to={item.path}
                smooth={true}
                duration={500}
                offset={-50}
                key={i}
                className="text-white/80 tracking-wide hover:text-blue-600 duration-300 ease-in-out cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl m-auto w-full flex flex-col gap-5  items-center justify-center border-t-[1px] pt-5 border-white/50 sm:flex-row md:justify-between">
        <div className="flex gap-2 items-center text-white/80 tracking-wide font-inter">
          <div>
            <FaRegCopyright />
          </div>
          <h1>2024 Rundweb Developer</h1>
        </div>
        <div className="flex items-center gap-4">
          {socialItems.map((item, i) => (
            <div
              key={i}
              className="bg-neutral-700 w-8 h-8 flex items-center justify-center rounded-lg text-white border-white border-[1px]  cursor-pointer group duration-300 ease-in-out hover:scale-110"
            >
              <item.icon className="text-lg duration-300 ease-in-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FooterComponents;
