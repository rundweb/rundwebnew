import product1 from "../assets/rundpay.svg";
import product2 from "../assets/rundmost.svg";
import product3 from "../assets/rundshop.svg";
import product4 from "../assets/furniture.svg";
import product5 from "../assets/rundgame.svg";
import product6 from "../assets/designsolution.svg";
import { HiMiniArrowRight } from "react-icons/hi2";
const ProductComponents = () => {
  const productItem = [
    {
      name: "Rundpay – Smart & Secure Payment Solution",
      img: product1,
      link: "https://rundweb.github.io/Rundpay/",
    },
    {
      name: "Rundmost – Sleek & Stylish Web Template for Businesses",
      img: product2,
      link: "https://rundweb.github.io/rundmost/",
    },
    {
      name: "Rundshop – Modern & Responsive eCommerce Template",
      img: product3,
      link: "https://rundweb.github.io/rundshop/",
    },
    {
      name: "FurndWeb – Modern & Elegant Furniture Website Template",
      img: product4,
      link: "https://rundweb.github.io/furundweb/",
    },
    {
      name: "Rundgame – Modern & Dynamic Gaming Website Template",
      img: product5,
      link: "https://rundweb.github.io/rundgame/",
    },
    {
      name: "DesignSolutions – Creative & Modern Web Design Agency Template",
      img: product6,
      link: "https://rundweb.github.io/designsolutions/",
    },
  ];

  return (
    <section id="portfolio" className="min-h-screen max-w-7xl m-auto p-5 py-12 md:py-20 flex items-center flex-col justify-center gap-16">
      <div className="flex items-center flex-col gap-5 text-center">
        <h1
          className="text-neutral-800 font-inter font-extrabold tracking-wider text-3xl max-w-2xl md:text-5xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Our Recent Projects
        </h1>
        <h1
          className="text-neutral-800/90 font-inter font-medium text-base tracking-wide"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          We have helped various businesses and startups build professional and
          high-performing websites
        </h1>
      </div>
      <div className="flex flex-wrap w-full gap-10 justify-center items-start md:gap-16">
        {productItem.map((item, i) => (
          <div
            key={i}
            className="sm:max-w-xs w-full font-inter flex flex-col gap-5 relative group cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="absolute z-20 bg-blue-500 h-16 w-16 flex items-center justify-center md:-top-5 md:-left-5 rounded-md">
              <h1 className="font-extrabold text-white text-3xl">{i + 1}</h1>
            </div>
            <div className="overflow-hidden relative z-10 rounded-md">
              <img
                src={item.img}
                alt=""
                className="group-hover:scale-110 duration-500 ease-in-out"
              />
            </div>
            <div className="flex items-center justify-start gap-2">
              <div className="w-8 h-[2px] bg-blue-500"></div>
              <p className="text-neutral-900 font-medium text-sm uppercase tracking-wide">
                Landing Page
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-neutral-800 font-extrabold text-xl tracking-wide uppercase group-hover:text-blue-600 duration-500 ease-in-out">
                {item.name}
              </h1>
              <a
                href={item.link}
                target="_blank"
                className="flex items-center gap-2 font-medium text-blue-600 text-sm uppercase group-hover:gap-8 duration-500 ease-in-out"
              >
                Live Priview <HiMiniArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductComponents;
