import { GoArrowUpRight } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import gsap from "gsap";
const ContactComponents = () => {
  const [openContact, setOpenContact] = useState(true);

  const handleContact = () => {
    setOpenContact(false);
    gsap.fromTo(
      ".box-contact",
      { scale: 0 },
      { scale: 1, duration: 1, ease: "power2.out" }
    );
  };
  const handleContactClose = () => {
    setOpenContact(true);
  };
  return (
    <section
      id="contact"
      className="min-h-screen max-w-7xl m-auto p-5 py-12 flex items-center justify-between flex-col gap-10 md:flex-row"
    >
      <div
        className="flex flex-col lg:flex-row gap-2 w-full shadow-2xl bg-neutral-800 rounded-xl items-center justify-center p-5 lg:px-20 py-16 lg:py-20 relative overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex flex-col gap-2 w-full text-center lg:text-start">
          <label
            htmlFor="contact"
            className="text-blue-600 font-inter font-semibold tracking-wide text-xl relative z-20"
          >
            Contact
          </label>
          <h1 className="text-white font-montserrat font-extrabold tracking-wide text-5xl max-w-3xl relative z-20 mb-2">
            Get in Touch & Start Growing Your <span>Business!</span>
          </h1>
          <p className=" text-base font-medium text-white tracking-wide relative z-20">
            We’re ready to help you create a landing page that drives results.
          </p>
        </div>
        <div className="relative z-20 lg:w-[30%] mt-5 lg:mt-0">
          <div
            className="button-black gap-2 cursor-pointer"
            onClick={handleContact}
          >
            Contact Us
            <GoArrowUpRight className="text-2xl" />
          </div>
        </div>
      </div>
      <div
        className={`fixed w-full h-full bg-neutral-900/60 left-0 top-0 z-[100]  items-center justify-center p-5 ${
          openContact ? "hidden" : "flex"
        }`}
      >
        <div className="bg-white max-w-xl rounded-xl p-5 md:p-10 flex flex-col gap-2 text-center relative box-contact">
          <div
            className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer absolute right-5 top-5 "
            onClick={handleContactClose}
          >
            <AiOutlineClose className="text-blue-600 text-xl" />
          </div>
          <h1 className="text-3xl font-inter font-semibold text-blue-600">
            Contact Us
          </h1>
          <h2 className="text-base font-medium text-neutral-800/70 tracking-wide">
            Quickly contact us with any of your questions or ideas and we will
            respond as soon as possible!
          </h2>
          <form action="" className="flex flex-col gap-5 mt-5">
            <input
              type="text"
              placeholder="Your name"
              className="h-12 w-full bg-gray-100 rounded-md px-5"
            />
            <input
              type="email"
              placeholder="Your email"
              className="h-12 w-full bg-gray-100 rounded-md px-5"
            />
            <textarea
              name=""
              id=""
              placeholder="Your message"
              rows={5}
              className="w-full bg-gray-100 rounded-md p-5"
            ></textarea>
            <button className="button-black">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactComponents;
