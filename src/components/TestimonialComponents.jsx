import { IoIosStar } from "react-icons/io";
import { MdFormatQuote } from "react-icons/md";
import envanto from "../assets/envanto.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
const TestimonialComponents = () => {
  const testimonials = [
    {
      name: "Andi Pratama",
      position: "CEO",
      testimonial:
        "RundWeb created a fast and high-performance website, improving our customer engagement significantly. Their team is professional and very responsive!",
    },
    {
      name: "Lisa Wijaya",
      position: "Marketing Manager",
      testimonial:
        "Impressed with RundWeb’s modern design and excellent UX/UI. Their support and post-launch maintenance made our website even better!",
    },
    {
      name: "Michael Tan",
      position: "Founder",
      testimonial:
        "RundWeb understands business needs perfectly. They delivered a solution that increased our online sales and improved customer experience.",
    },
    {
      name: "Rina Setiawan",
      position: "COO",
      testimonial:
        "We needed a responsive, SEO-friendly site, and RundWeb delivered exactly that. Now our site ranks higher on Google!",
    },
    {
      name: "Daniel Chandra",
      position: "Product Manager",
      testimonial:
        "RundWeb transformed our outdated website into a sleek, modern platform with a great user experience. Highly satisfied!",
    },
    {
      name: "Nina Kusuma",
      position: "Business Owner",
      testimonial:
        "RundWeb built a beautiful, high-performance website for my online store. The results exceeded my expectations!",
    },
  ];

  return (
    <section
      id="testimonial"
      className="min-h-screen flex items-center justify-center py-10"
    >
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-4 items-center justify-center px-5 text-center">
          <h1
            className="font-bold text-neutral-800 text-4xl capitalize md:text-5xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Success Stories from Our Clients
          </h1>
          <h2
            className="text-neutral-800/80 tracking-wide font-medium"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Great websites drive great businesses. See what our clients have to
            say!
          </h2>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <Swiper
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            spaceBetween={20}
            breakpoints={{
              720: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1240: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            speed={6000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white m-5 my-10 flex flex-col gap-5 shadow-xl rounded-lg p-5 font-inter md:h-72 md:justify-between">
                  <div className="flex items-center justify-start gap-1 text-yellow-500 text-xl">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                  </div>
                  <div className="flex items-start">
                    <div>
                      <MdFormatQuote className="text-blue-600 text-xl" />
                    </div>
                    <h1 className="font-medium tracking-wide text-neutral-800/90">
                      {item.testimonial}
                    </h1>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <div>
                      <img
                        src={envanto}
                        className="w-12 h-12"
                        alt="envanto logo"
                      />
                    </div>
                    <div>
                      <h1 className="text-neutral-900 font-semibold tracking-wide text-base">
                        {item.name}
                      </h1>
                      <h2 className="text-blue-600 font-medium tracking-wide text-sm">
                        {item.position}
                      </h2>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialComponents;
