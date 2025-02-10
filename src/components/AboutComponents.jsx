import { BiMobileAlt, BiRocket, BiSearchAlt2, BiSupport } from "react-icons/bi";
const AboutComponents = () => {
  const advantages = [
    {
      icon: BiMobileAlt,
      title: "Modern Design",
      description:
        "Ensures seamless, user-friendly experiences on all devices with adaptive, intuitive interfaces.",
    },
    {
      icon: BiRocket,
      title: "Optimized Speed",
      description:
        "Delivers fast, high-performance websites with optimized loading times for better user engagement.",
    },
    {
      icon: BiSearchAlt2,
      title: "SEO-Friendly",
      description:
        "Boosts online visibility, improves search rankings, and increases organic traffic effectively.",
    },
    {
      icon: BiSupport,
      title: "Support & Maintenance",
      description:
        "Provides continuous updates, security enhancements, and dedicated customer support.",
    },
  ];
  return (
    <section
      id="about"
      className="sm:px-5 py-12 md:py-20 flex items-center justify-center"
    >
      <div
        className="max-w-7xl overflow-hidden m-auto p-5 py-10 sm:py-20 md:px-20 bg-gray-50 rounded-3xl flex flex-col gap-10 lg:gap-14 shadow-lg"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex flex-col gap-5 lg:flex-row items-center">
          <div className="flex flex-col gap-2 w-full">
            <h1
              className="text-blue-600 font-inter font-semibold tracking-wide text-lg"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Why Choose RundWeb?
            </h1>
            <h2
              className="text-neutral-800 font-montserrat font-semibold tracking-wide text-4xl"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              We build fast, impactful digital experiences.
            </h2>
          </div>
          <div className="w-full">
            <p
              className=" text-base font-normal text-neutral-800/70 tracking-wide"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              We create engaging and effective digital experiences. With the
              latest technology and user-centered design, we ensure your
              business stands out in the digital landscape.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 justify-between">
          {advantages.map((item, i) => (
            <div
              key={i}
              className="max-w-sm sm:w-60 flex flex-col gap-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center">
                <item.icon className="text-blue-600 text-3xl" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-neutral-800 font-semibold text-lg">
                  {item.title}
                </h1>
                <p className="text-sm tracking-wide text-neutral-800/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutComponents;
