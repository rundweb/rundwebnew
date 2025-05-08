import { Link } from "react-scroll";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { useState } from "react";
import MaintenanceComponents from "./MaintenanceComponents";
const FooterComponents = () => {
  const companyItems = [
    {
      name: "Blog",
      path: "",
    },
    {
      name: "Pricing",
      path: "",
    },
    {
      name: "Demo",
      path: "",
    },
  ];

  const resourceItems = [
    {
      name: "Documentation",
      path: "",
    },
    {
      name: "Service",
      path: "",
    },
    {
      name: "Testimonial",
      path: "",
    },
  ];

  const legalItems = [
    {
      name: "Terms of Service",
      path: "",
    },
    {
      name: "Privacy Policy",
      path: "",
    },
    {
      name: "Cookies Policy",
      path: "",
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

  const [openMaintenance, setOpenMaintenance] = useState(true);

  const handleMaintenance = () => {
    setOpenMaintenance(false);
  };
  return (
    <section className="bg-neutral-800 p-5 py-12 flex flex-col gap-10">
      <div className="max-w-7xl m-auto w-full flex flex-col gap-5 md:flex-row justify-between">
        <div className="flex flex-col gap-2 w-full">
          <Link className="text-white font-inter font-bold tracking-wide text-xl">
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
              <div
                onClick={handleMaintenance}
                key={i}
                className="text-white/80 tracking-wide hover:text-blue-600 duration-300 ease-in-out cursor-pointer"
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-1 text-white">
            <h1 className="font-inter font-semibold text-lg">Resources</h1>
            {resourceItems.map((item, i) => (
              <div
                onClick={handleMaintenance}
                key={i}
                className="text-white/80 tracking-wide hover:text-blue-600 duration-300 ease-in-out cursor-pointer"
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-1 text-white">
            <h1 className="font-inter font-semibold text-lg">Legal</h1>
            {legalItems.map((item, i) => (
              <div
                onClick={handleMaintenance}
                key={i}
                className="text-white/80 tracking-wide hover:text-blue-600 duration-300 ease-in-out cursor-pointer"
              >
                {item.name}
              </div>
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
              className="bg-neutral-700 w-8 h-8 flex items-center justify-center rounded-lg text-white border-white border-[1px] "
            >
              <item.icon className="text-lg" />
            </div>
          ))}
        </div>
      </div>

      <div
        className={`fixed z-[100] top-0 left-0 w-full min-h-screen bg-white ${
          openMaintenance ? "hidden" : "flex"
        } items-center justify-center p-5`}
      >
        <MaintenanceComponents/>
      </div>
    </section>
  );
};

export default FooterComponents;
