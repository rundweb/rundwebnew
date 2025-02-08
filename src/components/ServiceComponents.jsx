import { FaPaintBrush, FaRocket, FaSearch, FaChartLine } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
const ServiceComponents = () => {
  const serviceItems = [
    { 
      title: "Modern Design", 
      description: "Sleek, stylish, and visually appealing to create a strong first impression for users friendly.", 
      icon: FaPaintBrush 
    },
    { 
      title: "Ultra-Fast Loading", 
      description: "Optimized for speed, reducing bounce rates and ensuring smooth user experience on any device.", 
      icon: FaRocket 
    },
    { 
      title: "SEO Optimized", 
      description: "Built with SEO best practices to help your website rank higher on search engines easily.", 
      icon: FaSearch 
    },
    { 
      title: "High Conversion Rates", 
      description: "Designed strategically to engage visitors, increase trust, and turn leads into loyal customers.", 
      icon: FaChartLine 
    }
  ];
  return (
    <section className="min-h-screen max-w-7xl m-auto p-5 flex items-center flex-col justify-center gap-10">
      <div className="flex items-center flex-col gap-2 text-center">
        <h1 className="text-neutral-800 font-montserrat font-bold tracking-wider text-2xl max-w-2xl md:text-5xl">
          Beautiful & Ready-to-Use Landing Pages!
        </h1>
        <h1 className="text-neutral-800/90 font-inter font-normal text-sm tracking-wide">
          Choose from premium designs that help your business grow faster
        </h1>
      </div>
      <div className="flex gap-5 flex-row flex-wrap lg:flex-nowrap justify-center">
        {serviceItems.map((item, i) => (
          <div key={i} className="w-full p-5 bg-gray-100 rounded-md flex flex-col gap-8 max-w-xs md:py-8 cursor-pointer hover:scale-105 duration-500 ease-in-out">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <item.icon className="text-neutral-800 text-lg"/>
            </div>
            <div>
              <h1 className="text-neutral-800 font-inter tracking-wide font-semibold text-lg">{item.title}</h1>
              <p className="font-normal tracking-wide text-neutral-800/90 text-sm my-2">{item.description}</p>
            </div>
            <div>
              <a href="" className="button-black gap-2">
                Learn More
                <GoArrowUpRight className="text-2xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceComponents;
