"use client";
import React from "react";
import Image from "next/image";
import Heading from "./Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "./Venue.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import Venue1 from "./../images/Venue1.jpeg";
import Venue2 from "./../images/Venue2.jpeg";
import Venue3 from "./../images/Venue3.jpeg";
import Venue4 from "./../images/Venue4.jpeg";
function Venue() {
  const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <>
      <div id="venue">
        <Heading title="Our " subtitle="Venue" />

        <div className="bg-background">
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              {/* <h1 className="text-[13vw] font-bold text-center text-grey-secondary">
                VENUE
              </h1>
              <h1 className="text-white text-[5vw] font-bold text-center absolute top-[6vw] left-0 right-0 mx-auto">
                VENUE
              </h1> */}

              {/* <div>Venue</div> */}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-10 py-10 lg:mx-28">
            <div className="col-span-3 rounded-xl items-center justify-center lg:px-0 px-10">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                // className={`mySwiper ${styledClasses}`}
                autoplay={{ delay: 2000 }}
              >
                <SwiperSlide>
                  <Image
                    className="rounded-xl h-4/5"
                    placeholder="blur"
                    // src="https://cdn.statically.io/gh/devfestkolkata2022/assets/main/taalkutir/Slide%2016_9%20-%204.jpg"
                    //  src="https://i.ibb.co/Jsjjpft/My-project.jpg"
                    // src="https://i.ibb.co/hYQb1f6/mckv3.jpg"
                    src={Venue1}
                    width="100%"
                    //height="100%"
                    // display="block"
                    alt="MCKVIE"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="rounded-xl"
                    placeholder="blur"
                    // src="https://cdn.statically.io/gh/devfestkolkata2022/assets/main/taalkutir/Slide%2016_9%20-%205.jpg"
                    //src="https://i.ibb.co/hYQb1f6/mckv3.jpg"
                    src={Venue2}
                    width="100%"
                    alt="MCKVIE"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="rounded-xl"
                    placeholder="blur"
                    //src="https://cdn.statically.io/gh/devfestkolkata2022/assets/main/taalkutir/Slide%2016_9%20-%201.jpg"
                    src={Venue3}
                    // src="https://i.ibb.co/hYQb1f6/mckv3.jpg"
                    // src="https://cdn.statically.io/gh/U220053/DSA-Practice/main/mckv3.jpg"
                    width="100%"
                    alt="MCKVIE"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="rounded-xl"
                    placeholder="blur"
                    // src="https://cdn.statically.io/gh/devfestkolkata2022/assets/main/taalkutir/Slide%2016_9%20-%202.jpg"
                    src={Venue4}
                    // src="https://i.ibb.co/hYQb1f6/mckv3.jpg"
                    // src="https://cdn.statically.io/gh/U220053/DSA-Practice/main/mckv3.jpg"
                    width="100%"
                    alt="MCKVIE"
                  />
                </SwiperSlide>
                {/* <SwiperSlide>
                  <img
                    className="rounded-xl"
                    src="https://cdn.statically.io/gh/devfestkolkata2022/assets/main/taalkutir/Slide%2016_9%20-%203.jpg"
                    width="100%"
                    alt="MCKVIE"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="rounded-xl"
                    src="https://cdn.statically.io/gh/devfestkolkata2022/assets/main/taalkutir/Slide%2016_9%20-%206.jpg"
                    width="100%"
                    alt="MCKVIE"
                  />
                </SwiperSlide> */}
              </Swiper>
              {/* <img 
            className="rounded-xl"
            src="https://lh5.googleusercontent.com/p/AF1QipPgWL5vprS4Rgpmbsr2mdoAEI_g2CNGWueH3J6V=s1108-k-no" width="100%" alt="Taal Kutir Convention Centre"
            /> */}
            </div>
            <div className="flex flex-col col-span-2 items-center justify-center lg:mt-10 mt-5">
              <div className="flex items-center mb-10">
                <img
                  src="https://img.icons8.com/color/48/000000/marker--v1.png"
                  className="lg:w-10 w-[6vw]"
                  alt="icon"
                />
                <p className="text-white  lg:text-2xl font-semibold pl-2">
                  MCKV Institute of Engineering,Howrah
                </p>
              </div>

              <iframe
                // className="rounded-xl lg:w-full w-[80vw] lg:h-2/6  "
                //clasNmae="w-[80vw] h-[30vw] "
                //className="m"

                title="mckv map"
                className=" m rounded-xl lg:w-full w-[80vw] lg:h-full h-[30vw]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.9151916279384!2d88.34551381399842!3d22.619641936944895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d65da7b3775%3A0x30915f7e98f1b0d5!2sMCKV%20Institute%20of%20Engineering!5e0!3m2!1sen!2sin!4v1669300666177!5m2!1sen!2sin"
                width="100%"
                height="200px"
                top="-10px"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Venue;
