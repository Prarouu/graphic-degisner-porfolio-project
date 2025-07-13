import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import UnderlineAnchor from "../components/UnderlineAnchor";
import { ArrowRight } from "lucide-react";
import { easeInOut, motion } from "framer-motion";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        lerp: 0.05,
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container className="relative text-white">
      <TopTextHero />
      <StuduiInfoSection />
      <ClientPreview />
      <BottomContact />
    </div>
  );
}

function TopTextHero() {
  let text = "champ";

  return (
    <div className="relative bg-black h-[18vh] sm:h-[30vh] md:h-[30vh] lg:h-[40vh] xl:h-[50vh] w-full overflow-hidden">
      <motion.h1
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: [0, 0.55, 0.45, 1] as [number, number, number, number],
              staggerChildren: 0.05,
              delayChildren: 0.1,
            },
          },
        }}
        className="absolute top-[25px] lg:top-[30px] w-full h-full leading-none text-[125px] sm:text-[220px] md:text-[250px] lg:text-[320px] xl:text-[45vh] text-nowrap"
      >
        {text.split("").map((l, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              initial: {
                y: 150,
                opacity: 0,
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: [0, 0.55, 0.45, 1] as [number, number, number, number],
                },
              },
            }}
          >
            {l}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

import RingImage from "../assets/Home images/aAp_ufIqRLdaBlpt_TEDed.webp";
import FastVid from "../assets/videos/aEfCgrh8WN-LV6iU_unf_16x9_un_animated_01_frame02_2_1_prob4-540p-.mp4";
import toyotaVid from "../assets/videos/aAwd4_IqRLdaBoov_toyota_para_edit_14_gif14_1_prob4-720p-.mp4";
import nikeVid from "../assets/videos/aAwdUfIqRLdaBoom_nike_x_zero_master_music_2_1_prob4-540p-.mp4";
import golfImg from "../assets/Home images/Z91p-jxkOkZ2kIbR_LIVEGOLF_Intro_design_A.webp";
import imageVid from "../assets/videos/aAwn8fIqRLdaBoqi_nw_sizzlereel_master_3840x2160_036_alt_1_prob4-720p-.mp4";
import hbxImage from "../assets/Home images/aAqAFPIqRLdaBlpx_HB (2).webp";
import ginoImage from "../assets/Home images/Z9NujhsAHJWomha8_GA_101_Chapter_Introduction_v1_05.webp";

function StuduiInfoSection() {
  let para =
    "We bring ideas to life through sleek, innovative animation, crafting experiences that go beyond visuals to captivate and engage.";

  const parent = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0, 0.55, 0.45, 1] as [number, number, number, number],
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const child = {
    initial: { y: 30, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0, 0.55, 0.45, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <div
      data-scroll
      data-scroll-speed="2"
      className="w-full h-auto bg-black p-4 sm:p-8"
    >
      <div className="w-full h-[20vh] sm:h-[40vh] mb-4 sm:mb-8">
        <motion.h1
          className="relative text-3xl sm:text-7xl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={parent}
        >
          <UnderlineAnchor
            href="/"
            classname="absolute top-4 w-24 sm:w-32 md:w-48 md:mb-8 mr-64"
          >
            <div className="flex justify-between items-center">
              <h1 className="text-xs sm:text-lg md:text-xl">The Studio</h1>
              <ArrowRight className="text-xs font-extrabold" />
            </div>
          </UnderlineAnchor>
          {para.split(" ").map((word, i) => (
            <motion.span
              key={i}
              variants={child}
              className="text-lg sm:text-4xl md:text-6xl xl:text-7xl inline-block mr-1 sm:mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-12 h-auto">
        {/* 1st section */}
        <div className="">
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 h-auto md:h-[400px] lg:h-[500px]">
            <div className="md:w-[50%] md:h-[75%]">
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 0.8, ease: [0, 0.55, 0.45, 1] }}
                viewport={{ once: true }}
                className="w-full h-[200px] sm:h-[250px] md:h-[90%] origin-left overflow-hidden"
              >
                <img
                  src={RingImage}
                  alt="RingImage"
                  className="w-full h-full object-cover filter hover:grayscale transition-all duration-800 ease-in-out"
                />
              </motion.div>
              <div className="flex justify-between items-start py-2 group">
                <div>
                  <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-tight">
                    How doe sartificial intelligence work?
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-500 transition-all duration-300 ease-in-out leading-relaxed mt-1">
                    Design, Art Direction, Animation and Direction.
                  </p>
                </div>
                <p className="text-xs sm:text-sm md:text-base">2021</p>
              </div>
            </div>
            <div className="md:w-[50%]">
              <motion.div
                initial={{ clipPath: "inset(0 0 0 100%)" }}
                whileInView={{ clipPath: "inset(0 0 0 0)" }}
                transition={{ duration: 0.8, ease: [0, 0.55, 0.45, 1] }}
                viewport={{ once: true }}
                className="w-full h-[200px] sm:h-[250px] md:h-[90%] origin-right overflow-hidden"
              >
                <video
                  preload="true"
                  src={FastVid}
                  autoPlay
                  muted
                  loop
                  className="object-cover w-full h-full filter hover:grayscale transition-all duration-800 ease-in-out"
                />
              </motion.div>
              <div className="flex justify-between items-start py-2 group">
                <div>
                  <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-tight">
                    Summit of the Future, UN Foundation
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-500 transition-all duration-300 ease-in-out leading-relaxed mt-1">
                    Animation and Creative Design.
                  </p>
                </div>
                <p className="text-xs sm:text-sm md:text-base">2025</p>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd section */}
        <div className="">
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 h-auto md:h-[450px] lg:h-[600px]">
            <div className="md:w-[60%]">
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 0.8, ease: [0, 0.55, 0.45, 1] }}
                viewport={{ once: true }}
                className="w-full h-[200px] sm:h-[300px] md:h-[90%] origin-left overflow-hidden"
              >
                <video
                  preload="true"
                  src={nikeVid}
                  autoPlay
                  muted
                  loop
                  className="object-cover w-full h-full filter hover:grayscale transition-all duration-800 ease-in-out"
                />
              </motion.div>
              <div className="flex justify-between items-start py-2 group">
                <div>
                  <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-tight">
                    Nike X-Zero
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-500 transition-all duration-300 ease-in-out leading-relaxed mt-1">
                    Creative Design, Design and Animation.
                  </p>
                </div>
                <p className="text-xs sm:text-sm md:text-base">2025</p>
              </div>
            </div>
            <div className="md:w-[40%] md:h-[75%]">
              <motion.div
                initial={{ clipPath: "inset(0 0 0 100%)" }}
                whileInView={{ clipPath: "inset(0 0 0 0)" }}
                transition={{ duration: 0.8, ease: [0, 0.55, 0.45, 1] }}
                viewport={{ once: true }}
                className="w-full h-[200px] sm:h-[250px] md:h-[90%] flex flex-col origin-right overflow-hidden"
              >
                <video
                  preload="true"
                  src={toyotaVid}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover filter hover:grayscale transition-all duration-800 ease-in-out"
                />
              </motion.div>
              <div className="flex justify-between items-start py-2 group">
                <div>
                  <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-tight">
                    Toyota director cut'24
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-500 transition-all duration-300 ease-in-out leading-relaxed mt-1">
                    Design, Edition and Animation.
                  </p>
                </div>
                <p className="text-xs sm:text-sm md:text-base">2024</p>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd Section */}
        <div className="">
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 h-auto md:h-[400px] lg:h-[500px]">
            <div className="md:w-[40%] md:h-[75%]">
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 0.8, ease: [0, 0.55, 0.45, 1] }}
                viewport={{ once: true }}
                className="w-full h-[200px] sm:h-[250px] md:h-[90%] origin-left overflow-hidden"
              >
                <img
                  src={golfImg}
                  alt="RingImage"
                  className="w-full h-full object-cover filter hover:grayscale transition-all duration-800 ease-in-out"
                />
              </motion.div>
              <div className="flex justify-between items-start py-2 group">
                <div>
                  <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-tight">
                    LIV Golf 2025
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-500 transition-all duration-300 ease-in-out leading-relaxed mt-1">
                    Creative Design, Animation and Design.
                  </p>
                </div>
                <p className="text-xs sm:text-sm md:text-base">2025</p>
              </div>
            </div>
            <div className="md:w-[60%]">
              <motion.div
                initial={{ clipPath: "inset(0 0 0 100%)" }}
                whileInView={{ clipPath: "inset(0 0 0 0)" }}
                transition={{ duration: 0.8, ease: [0, 0.55, 0.45, 1] }}
                viewport={{ once: true }}
                className="w-full h-[200px] sm:h-[250px] md:h-[90%] origin-right overflow-hidden"
              >
                <video
                  preload="true"
                  src={imageVid}
                  autoPlay
                  muted
                  loop
                  className="object-cover w-full h-full filter hover:grayscale transition-all duration-800 ease-in-out"
                />
              </motion.div>
              <div className="flex justify-between items-start py-2 group">
                <div>
                  <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-tight">
                    Nerdwallet + Sizzle Reel
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-500 transition-all duration-300 ease-in-out leading-relaxed mt-1">
                    Edition and Motion.
                  </p>
                </div>
                <p className="text-xs sm:text-sm md:text-base">2024</p>
              </div>
            </div>
          </div>
        </div>
        {/* 4th section */}
        <div className="">
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 h-auto md:h-[400px] lg:h-[500px]">
            <div className="md:w-[60%]">
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 0.8, ease: [0, 0.55, 0.45, 1] }}
                viewport={{ once: true }}
                className="w-full h-[200px] sm:h-[250px] md:h-[90%] origin-left overflow-hidden"
              >
                <img
                  src={hbxImage}
                  alt="RingImage"
                  className="w-full h-[70%] md:h-[70%] object-cover filter hover:grayscale transition-all duration-800 ease-in-out"
                />
              </motion.div>
              <div className="flex justify-between items-start py-2 group">
                <div>
                  <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-tight">
                    HBX Hyperbeast
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-500 transition-all duration-300 ease-in-out leading-relaxed mt-1">
                    Design and Animation.
                  </p>
                </div>
                <p className="text-xs sm:text-sm md:text-base">2022</p>
              </div>
            </div>
            <div className="md:w-[40%] md:h-[75%]">
              <motion.div
                initial={{ clipPath: "inset(0 0 0 100%)" }}
                whileInView={{ clipPath: "inset(0 0 0 0)" }}
                transition={{ duration: 0.8, ease: [0, 0.55, 0.45, 1] }}
                viewport={{ once: true }}
                className="w-full h-[200px] sm:h-[250px] md:h-[90%] origin-right overflow-hidden"
              >
                <img
                  src={ginoImage}
                  alt="RingImage"
                  className="w-full h-full object-cover filter hover:grayscale transition-all duration-800 ease-in-out"
                />
              </motion.div>
              <div className="flex justify-between items-start py-2 group">
                <div>
                  <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-tight">
                    Gino Auriemma, MasterClass
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-500 transition-all duration-300 ease-in-out leading-relaxed mt-1">
                    Animation.
                  </p>
                </div>
                <p className="text-xs sm:text-sm md:text-base">2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import rightDivImg from "../assets/Home images/loop images/Z9PnzhsAHJWomiEx_SummerMadnes.webp";

function ClientPreview() {
  const parent = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0, 0.55, 0.45, 1] as [number, number, number, number],
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const child = {
    initial: { y: 30, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0, 0.55, 0.45, 1] as [number, number, number, number],
      },
    },
  };

  let para =
    "Specializing in 2D animation, bold typography, vibrant colors, and seamless transitions, We create animations that embody brand identities with style and flair.";

  let para2 =
    "Driven by a passion for Abstract Art and striking visuals, every piece isn't - Just Animation.";

  return (
    <div className="w-full relative min-h-[120vh] md:h-[280vh] bg-black">
      <span className="absolute top-0 w-full h-[1px] bg-white/50" />
      {/* Top Section */}
      <section className="w-full h-auto md:h-[40%] py-8">
        <div className="px-4 sm:px-8 h-auto md:h-[15%] flex flex-row justify-between items-start gap-4 md:gap-0 text-md sm:text-xl md:text-4xl xl:text-8xl ">
          <UnderlineAnchor href="/" classname="h-[75%]">
            View All Projects
          </UnderlineAnchor>
          <h1 className="">64</h1>
        </div>
        <div className="w-full h-auto my-8 md:h-[60%]">
          <ImageGallery />
        </div>
        <div className="w-full h-[20vh] sm:h-[60vh] px-4 sm:px-8">
          <motion.h1
            className="relative text-2xl sm:text-7xl"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={parent}
          >
            <span className="text-xs sm:text-sm text-gray-500 relative mr-8 sm:mr-24">
              (We turn motion into meaning.)
            </span>

            {para.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={child}
                className="inline-block mr-1 sm:mr-2 sm:text-5xl md:text-4xl"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="w-full h-auto mt-24 md:h-[60%] bg-black py-12 md:py-24">
        <div className="px-4 sm:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* Left Column */}
          <div className="md:col-span-4 mb-8 md:mb-0">
            <h4 className="mb-6 md:mb-12">(Core Values)</h4>
            <div className="space-y-4 md:space-y-6">
              <div>
                <h4>(1) Creative Energy in Every Frame</h4>
                <hr className="mt-4" />
              </div>
              <div>
                <h4>(2) Building Bold Brands</h4>
                <hr className="mt-4" />
              </div>
              <div>
                <h4>(3) Flawless Flow</h4>
                <hr className="mt-4" />
              </div>
              <div>
                <h4>(4) Vision Beyond the surface</h4>
                <hr className="mt-4" />
              </div>
              <div>
                <h4>(5) Limit-Pushing Innovation</h4>
                <hr className="mt-4" />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-8 space-y-12 md:space-y-24">
            <motion.div
              initial={{ clipPath: "inset(0 0 0 100%)" }}
              whileInView={{ clipPath: "inset(0 0 0 0%)" }}
              transition={{ duration: 0.8, ease: [0, 0.55, 0.45, 1] }}
              viewport={{ once: true }}
              className="origin-right overflow-hidden"
            >
              <motion.div
                initial="rest"
                whileHover="hover"
                className="w-full h-full relative group cursor-pointer"
              >
                <motion.img
                  src={rightDivImg}
                  alt=""
                  className="w-full h-auto"
                  variants={{
                    rest: { filter: "grayscale(0%)", opacity: 1 },
                    hover: { filter: "grayscale(100%)", opacity: 0.4 },
                  }}
                  transition={{ duration: 0.3, ease: easeInOut }}
                />
                <motion.h1
                  variants={{
                    rest: { opacity: 0, y: 10 },
                    hover: { opacity: 1, y: 0 },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: easeInOut,
                  }}
                  className="text-white absolute bottom-4 left-2 w-[300px]"
                >
                  View showreel page (Coming Soon)
                </motion.h1>
                <motion.span
                  className="absolute bottom-0 w-full h-1 bg-white origin-left"
                  variants={{
                    rest: { scaleX: 0 },
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.3, ease: easeInOut }}
                />
              </motion.div>
              <motion.h1
                className="relative text-2xl sm:text-6xl"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={parent}
              >
                {para2.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    variants={child}
                    className="inline-block mr-1 sm:mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>
            <div>
              <h4 className="mb-6 md:mb-12 text-xs sm:text-sm text-gray-500">
                (Clients)
              </h4>
              <div className="text-2xl sm:text-6xl">
                <h4>Apple</h4>
                <h4>Google</h4>
                <h4>Deepmind</h4>
                <h4>Pepsi</h4>
                <h4>Hyperbeast</h4>
                <UnderlineAnchor href="/" classname="text-2xl sm:text-6xl mt-3">
                  +12
                </UnderlineAnchor>
              </div>
            </div>
          </div>
        </div>
      </section>
      <span className="absolute bottom-0 w-full h-[1px] bg-white/50" />
    </div>
  );
}

function ImageGallery() {
  const images = [golfImg, hbxImage, ginoImage];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg ml-0 sm:ml-8">
      <img
        src={images[currentIndex]}
        className="w-full h-auto object-cover transition-opacity duration-500"
        alt={`Gallery Image ${currentIndex + 1}`}
      />
    </div>
  );
}

import graphicVid1 from "../assets/videos/white long bounce.mp4";
import graphicVid2 from "../assets/videos/6962644e.mp4";

function LiveTime() {
  const [time, setTime] = useState(new Date());
  const [timeZone, setTimeZone] = useState("");

  useEffect(() => {
    // Set initial timezone
    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);

    // Update time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-1">
      <h1>
        {time.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })}
      </h1>
      <h1>{timeZone}</h1>
    </div>
  );
}

function BottomContact() {
  return (
    <section className="min-h-[80vh] md:h-[155vh] w-full">
      <section className="w-full h-auto md:h-[5%] mt-4 mb-4 flex md:flex-row justify-between items-start px-2 md:px-4 gap-2 md:gap-0">
        <UnderlineAnchor
          href="/"
          classname="w-[20%] sm:w-[15%] md:w-[5%] h-[35px]"
        >
          <div className="flex justify-between items-center text-lg md:text-xl">
            <h1>Play</h1>
            <ArrowRight />
          </div>
        </UnderlineAnchor>
        <h1 className="text-4xl md:text-6xl">23</h1>
      </section>
      <section className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-24 px-2 md:px-4 gap-4 md:gap-0">
        <video
          src={graphicVid1}
          autoPlay
          muted
          loop
          preload="true"
          className="w-full md:w-[48%] h-auto mb-4 md:mb-0"
        ></video>
        <video
          src={graphicVid2}
          autoPlay
          muted
          loop
          preload="true"
          className="w-full md:w-[48%] h-auto"
        ></video>
      </section>
      <section className="flex flex-col md:flex-row justify-end items-start mb-12 md:mb-24 px-2 md:px-0">
        <div className="w-full md:w-1/4 h-full">
          <h1 className="text-gray-500 text-xs md:text-sm mb-6 md:mb-12">
            (Social)
          </h1>
          <motion.div className="flex flex-col text-2xl md:text-6xl">
            <motion.a
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.4 }}
              transition={{
                duration: 0.15,
                ease: easeInOut,
              }}
              href="/"
            >
              Email
            </motion.a>
            <motion.a
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.4 }}
              transition={{
                duration: 0.15,
                ease: easeInOut,
              }}
              href="/"
            >
              LinkedIn
            </motion.a>
            <motion.a
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.4 }}
              transition={{
                duration: 0.15,
                ease: easeInOut,
              }}
              href="/"
            >
              Behance
            </motion.a>
            <motion.a
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.4 }}
              transition={{
                duration: 0.15,
                ease: easeInOut,
              }}
              href="/"
            >
              Instagram
            </motion.a>
            <motion.a
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.4 }}
              transition={{
                duration: 0.15,
                ease: easeInOut,
              }}
              href="/"
            >
              Vimeo
            </motion.a>
          </motion.div>
        </div>
      </section>
      <section className="w-full h-auto md:h-[5%] flex flex-col md:flex-row text-xs pt-4 md:pt-8 px-2 md:px-4 gap-2 md:gap-0">
        <div className="w-full md:w-[10%] mb-2 md:mb-0">
          <h1>Los Angeles, CA</h1>
        </div>
        <div className="w-full md:w-[65%] mb-2 md:mb-0">
          <LiveTime />
        </div>
        <div className="w-full md:w-[25%]">
          <h1>@ 2025</h1>
          <h1>All Rights Reserved</h1>
        </div>
      </section>
    </section>
  );
}
