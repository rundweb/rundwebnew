import {
  FaLaptopCode,
  FaMobileAlt,
  FaBolt,
  FaCogs,
  FaChartBar,
  FaHeadset,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import product from "../assets/rundgame.svg";
import { useState } from "react";
import gsap from "gsap";
const ServiceComponents = () => {
  const serviceItems = [
    {
      title: "Custom Landing Page",
      description:
        "Tailor-made pages for speed, conversion, and user experience.",
      descFull:
        "We create high-converting landing pages tailored to your brand, combining intuitive design, strategic CTAs, and optimized performance to drive engagement and boost sales. Every page is designed with user psychology in mind, ensuring visitors take the desired action effortlessly.",
      icon: FaLaptopCode,
    },
    {
      title: "Mobile-Responsive Design",
      description: "Perfect display and functionality on all screen sizes.",
      descFull:
        "Your site will be fully responsive, adapting seamlessly to any screen size. We ensure smooth navigation, fast load times, and an intuitive user experience on desktops, tablets, and smartphones for maximum accessibility and retention.",
      icon: FaMobileAlt,
    },
    {
      title: "Lightning-Fast Performance",
      description: "Optimized code for fast loading and reduced bounce rates.",
      descFull:
        "We enhance website speed using clean code, image optimization, caching techniques, and performance best practices. Faster sites improve SEO rankings, reduce bounce rates, and keep visitors engaged for longer.",
      icon: FaBolt,
    },
    {
      title: "Advanced Integrations",
      description:
        "Seamless CRM, email, analytics, and automation tool integration.",
      descFull:
        "We integrate essential third-party tools like CRM, email marketing, payment gateways, and analytics to streamline business operations, automate workflows, and provide insightful data for smarter decision-making.",
      icon: FaCogs,
    },
    {
      title: "Conversion Rate Optimization",
      description: "A/B testing and design strategies for higher conversions.",
      descFull:
        "Through A/B testing, heatmaps, and UX refinements, we analyze user behavior to optimize layouts, CTAs, and content. This ensures visitors are guided naturally towards conversions, improving engagement and maximizing revenue potential.",
      icon: FaChartBar,
    },
    {
      title: "24/7 Support & Maintenance",
      description: "Ongoing support, updates, and bug fixes for stability.",
      descFull:
        "We offer continuous maintenance, security updates, performance monitoring, and bug fixes to ensure your website remains stable, secure, and up-to-date. Our dedicated support team is available around the clock to assist with any issues.",
      icon: FaHeadset,
    },
  ];

  const [openService, setOpenService] = useState(true);
  const [titleOpen, setTitleOpen] = useState("");
  const [descOpen, setDescOpen] = useState("");
  const [descfullOpen, setDescfullOpen] = useState("");

  const handleClick = (title, desc, descFull) => {
    setOpenService(false);
    setTitleOpen(title);
    setDescOpen(desc);
    setDescfullOpen(descFull);
    gsap.fromTo(
      ".box-service",
      { scale: 0 },
      { scale: 1, duration: 1, ease: "power2.out" }
    );
  };
  const handleClose = () => {
    setOpenService(true);
  };
  return (
    <section id="service" className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-7xl m-auto p-5 py-12 md:py-20 flex items-center flex-col justify-center gap-10">
        <div className="flex items-center flex-col gap-5 text-center">
          <h1
            className="text-neutral-800 font-inter font-extrabold tracking-wider text-4xl max-w-2xl md:text-5xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Our Services
          </h1>
          <h1
            className="text-neutral-800/90 font-inter font-medium text-base tracking-wide"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            High-quality landing pages for speed and conversion.
          </h1>
        </div>
        <div className="flex gap-5 flex-row flex-wrap  justify-center">
          {serviceItems.map((item, i) => (
            <div key={i} data-aos="fade-up" data-aos-duration="1000">
              <div
                key={i}
                className="w-full gap-5 p-5 bg-white rounded-md flex flex-col sm:max-w-xs md:py-8 cursor-pointer hover:scale-105 duration-500 ease-in-out"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <item.icon className="text-blue-600 text-3xl" />
                </div>
                <div>
                  <h1 className="text-neutral-800 font-inter tracking-wide font-semibold text-lg">
                    {item.title}
                  </h1>
                  <p className="font-normal tracking-wide text-neutral-800/90 text-sm ">
                    {item.description}
                  </p>
                </div>
                <div
                  className="w-max items-end"
                  onClick={() =>
                    handleClick(item.title, item.description, item.descFull)
                  }
                >
                  <a className="button-black gap-2">
                    Learn More
                    <GoArrowUpRight className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`fixed min-h-screen w-full top-0 left-0 bg-neutral-900/50 z-[60] flex items-center justify-center p-5 ${
            openService ? "hidden" : "inline-block"
          }`}
        >
          <div className="bg-white flex flex-col gap-5 p-5 rounded-md sm:flex-row max-w-2xl relative box-service ">
            <div className="absolute right-5 top-5">
              <div
                className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer"
                onClick={handleClose}
              >
                <AiOutlineClose className="text-blue-600 text-xl" />
              </div>
            </div>
            <div className="">
              <img
                src={product}
                alt=""
                className="w-full h-48 sm:h-full rounded-lg object-cover object-top"
              />
            </div>
            <div className="flex flex-col gap-2 font-inter sm:w-[100%] justify-between">
              <h1 className="capitalize font-bold text-xl tracking-wide text-neutral-900">
                {titleOpen}
              </h1>
              <p className="text-base tracking-wide text-neutral-900/80">
                {descOpen}
              </p>
              <p className="text-base tracking-wide text-neutral-900">
                {descfullOpen}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComponents;
