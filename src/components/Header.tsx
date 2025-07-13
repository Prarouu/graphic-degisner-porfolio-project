import { Circle, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import vidSide from "../assets/videos/aAwm8PIqRLdaBoqc_hb_mag_1_prob4-540p-.mp4";
import vidSide2 from "../assets/videos/aAwge_IqRLdaBopb_tsm_social_1_prob4-540p-.mp4";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const menuVariants = {
  open: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      type: "spring" as const,
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(0% 0% 0% 100%)",
    transition: {
      type: "spring" as const,
      bounce: 0,
      duration: 0.3,
    },
  },
};

export default function Header() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScrollLock = () => {
      const html = document.documentElement;
      const body = document.body;

      // Tailwind's `md` breakpoint is 768px
      if (contactOpen && window.innerWidth < 768) {
        html.style.overflow = "hidden";
        body.style.overflow = "hidden";
      } else {
        html.style.overflow = "auto";
        body.style.overflow = "auto";
      }
    };

    handleScrollLock();

    window.addEventListener("resize", handleScrollLock);

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", handleScrollLock);
    };
  }, [contactOpen]);

  return (
    <nav
      className={`fixed top-0 bg-black/50 backdrop-blur-sm h-10 md:h-20 w-screen flex p-4 z-30`}
    >
      <div className="md:w-[55%]">
        <a href="/">
          <h1 className="text-white mix-blend-difference text-xs md:text-lg font-bold">
            Please Call Me Champ Studio
          </h1>
        </a>
      </div>
      {/*
      Hamberger menu
       */}
      <div className="md:hidden">
        <button
          className="absolute right-0 px-4"
          onClick={() => setMobileNavOpen(true)}
        >
          <Menu className="text-white" />
        </button>
        <AnimatePresence>
          {mobileNavOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="bg-white absolute right-0 top-0 w-full sm:w-[60%] h-[100vh]"
            >
              <div className="text-xl p-4 flex justify-between">
                <h1 className="">Menu :</h1>
                <button
                  className="text-sm"
                  onClick={() => setMobileNavOpen(false)}
                >
                  close
                </button>
              </div>

              <motion.ul
                initial={{
                  clipPath: "inset(0% 0% 100% 0%)",
                }}
                whileInView={{
                  clipPath: "inset(0% 0% 0% 0%)",
                }}
                transition={{
                  duration: 0.5,
                  ease: easeInOut,
                  delay: 0.3,
                }}
                className="m-4 p-4 h-[85%] text-xl space-y-4 bg-black text-white rounded-[4px]"
              >
                <motion.li
                  initial={{
                    clipPath: "inset(0% 100% 0% 0%)",
                  }}
                  whileInView={{
                    clipPath: "inset(0% 0% 0% 0%)",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: easeInOut,
                    delay: 0.6,
                  }}
                >
                  <a
                    href="/"
                    className="flex justify-between items-center h-12 bg-white text-black p-2 rounded-[2px] "
                  >
                    Home
                    <h1>.</h1>
                  </a>
                </motion.li>
                <motion.li
                  initial={{
                    clipPath: "inset(0% 100% 0% 0%)",
                  }}
                  whileInView={{
                    clipPath: "inset(0% 0% 0% 0%)",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: easeInOut,
                    delay: 0.7,
                  }}
                >
                  <a
                    href="/"
                    className="flex justify-between items-center h-12 bg-white text-black p-2 rounded-[2px] "
                  >
                    About
                    <h1>.</h1>
                  </a>
                </motion.li>
                <motion.li
                  initial={{
                    clipPath: "inset(0% 100% 0% 0%)",
                  }}
                  whileInView={{
                    clipPath: "inset(0% 0% 0% 0%)",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: easeInOut,
                    delay: 0.8,
                  }}
                >
                  <a
                    href="/"
                    className="flex justify-between items-center h-12 bg-white text-black p-2 rounded-[2px] "
                  >
                    Projects
                    <h1>.</h1>
                  </a>
                </motion.li>
                <motion.li
                  initial={{
                    clipPath: "inset(0% 100% 0% 0%)",
                  }}
                  whileInView={{
                    clipPath: "inset(0% 0% 0% 0%)",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: easeInOut,
                    delay: 0.9,
                  }}
                >
                  <a
                    href="/"
                    className="flex justify-between items-center h-12 bg-white text-black p-2 rounded-[2px] "
                  >
                    Play
                    <h1>.</h1>
                  </a>
                </motion.li>
                <motion.li
                  initial={{
                    clipPath: "inset(0% 100% 0% 0%)",
                  }}
                  whileInView={{
                    clipPath: "inset(0% 0% 0% 0%)",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: easeInOut,
                    delay: 1,
                  }}
                >
                  <a
                    href="/"
                    className="flex justify-between items-center h-12 bg-white text-black p-2 rounded-[2px] "
                  >
                    Team
                    <h1>.</h1>
                  </a>
                </motion.li>
                <motion.li
                  initial={{
                    clipPath: "inset(0% 100% 0% 0%)",
                  }}
                  whileInView={{
                    clipPath: "inset(0% 0% 0% 0%)",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: easeInOut,
                    delay: 1.1,
                  }}
                >
                  <button
                    className="w-full text-start flex justify-between items-center h-12 bg-white text-black p-2 rounded-[2px] "
                    onClick={() => setContactOpen(!contactOpen)}
                  >
                    Contact
                    <h1>.</h1>
                  </button>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/*
      Hamberger menu end
       */}
      <div className="hidden md:block md:w-[35%] text-gray-500">
        <div>
          <ul className="flex space-x-1">
            <li className="hover:text-white">
              <a href="/">Home,</a>
            </li>
            <li className="hover:text-white">
              <a href="/">About,</a>
            </li>
            <li className="hover:text-white">
              <a href="/">Projects,</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-1">
            <li className="hover:text-white">
              <a href="/">Play,</a>
            </li>
            <li className="hover:text-white">
              <a href="/">Team,</a>
            </li>
            <li className="hover:text-white">
              <button
                className="cursor-pointer"
                onClick={() => setContactOpen(!contactOpen)}
              >
                Contact.
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:flex items-top justify-end md:w-[30%]">
        <div className="flex h-[20px] justify-end items-center space-x-2">
          <h1 className="text-white mix-blend-difference">Los Angeles, CA</h1>
          <Circle fill="white" size={14} />
        </div>
      </div>
      {/* Contact section */}
      <section
        className={`fixed right-0 ${
          contactOpen ? "top-0 sm:top-30" : "top-240"
        } bg-white h-[200vh] md:w-[90vh] transition-all duration-800 ease-in-out z-10 overflow-y-auto`}
      >
        <h1 className="px-8 pt-4 md:pt-8 text-4xl">
          Please call me champ Inc. Clone
        </h1>
        <p className="px-8 placeholder-violet-400 md:pt-2 md:w-[70%]">
          ( This form contacts "Jatin Thakur" who created this clone for
          placement and personal project purposes only. )
        </p>
        <div className="flex">
          <form
            action="https://formspree.io/f/mpwrjepj"
            method="POST"
            className="flex flex-col pl-8 space-y-8 py-4 md:w-[50%]"
          >
            <div className="flex flex-col mb-2">
              <label htmlFor="name" className="font-extralight text-2xl">
                Name
              </label>

              <input
                className=" border-black border-2 rounded-[2px] focus:outline-none mb-6 p-2 mt-1"
                type="text"
                name="name"
                id="name"
                placeholder="Mathew"
                required
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="email" className="font-extralight text-2xl">
                Email
              </label>
              <input
                className=" border-black border-2 rounded-[2px] focus:outline-none mb-6 p-2 mt-1"
                type="email"
                name="email"
                id="mail"
                placeholder="abc@gmail.com"
                required
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="phone" className="font-extralight text-2xl">
                Phone No.
              </label>
              <input
                className=" border-black border-2 rounded-[2px] focus:outline-none mb-6 p-2 mt-1"
                type="number"
                name="phone"
                id="phone"
                placeholder="+910987654321"
                required
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="budget" className="font-extralight text-2xl">
                Enter Project Budget
              </label>
              <input
                className=" border-black border-2 rounded-[2px] focus:outline-none mb-6 p-2 mt-1"
                type="number"
                name="budget"
                id="budget"
                placeholder="Min: 10,000/- Rs and Above"
                required
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="message" className="font-extralight text-2xl">
                Message for me
              </label>
              <textarea
                className=" border-black border-2 rounded-[2px] max-h-[100px] h-[100px] overflow-auto focus:outline-none mb-6 p-2 mt-1"
                name="message"
                placeholder="Message"
                id="message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="hover:bg-black hover:text-white w-[20%] h-8 rounded-[2px] cursor-pointer transition-all duration-50 ease-in-out"
            >
              Send
            </button>
          </form>
          <div className="hidden sm:block relative bg-gray-200 sm:w-[50%] md:w-[40%] h-[80%]">
            <motion.video
              src={vidSide}
              className="rotate-90 absolute top-40 right-15"
              autoPlay
              muted
              loop
            ></motion.video>
            <motion.video
              src={vidSide2}
              className="rotate-90 absolute top-90 left-35"
              autoPlay
              muted
              loop
            ></motion.video>
          </div>
        </div>
        <button
          className="absolute top-4 right-4 text-md font-extralight"
          onClick={() => setContactOpen(!contactOpen)}
        >
          close
        </button>
      </section>
    </nav>
  );
}
