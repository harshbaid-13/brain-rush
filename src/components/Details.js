"use client";
import React, { useState } from "react";
import data from "data.js";
import Image from "next/image";
import Buttons from "./Buttons";
const Details = () => {
  const [Modal, setModal] = useState(-1);
  const [Show, setShow] = useState("flex");
  const handleClick = () => {
    setModal(-1);
    Show == "flex" ? setShow("hidden") : setShow("flex");
  };
  return (
    <>
      {Modal != -1 && (
        <div>
          <div
            id="modal"
            className={
              "fixed top-0 left-0 right-0 z-20 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal h-full justify-center items-center backdrop-blur-md " +
              Show
            }
          >
            <div className="relative w-full h-auto max-w-2xl ">
              <div className="relative rounded-2xl shadow bg-background">
                <div className="flex items-center justify-between p-5 border-b rounded-t-2xl border-logoYellow border-2 ">
                  <h3 className="text-4xl font-medium text-white ">
                    {data[Modal].name}
                  </h3>

                  <button
                    onClick={handleClick}
                    type="button"
                    className="text-gray-400 bg-transparent rounded-md text-sm p-1.5 ml-auto inline-flex items-center border-logoYellow border-2 hover:bg-logoYellow hover:text-background"
                    data-modal-hide="small-modal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 border-logoYellow border-2 rounded-b-2xl space-y-3">
                  <h2 className="mb-1 text-2xl font-semibold text-gray-100">
                    Rules
                  </h2>
                  <ol className="max-w-xl space-y-1 text-xl text-gray-100 list-decimal list-inside">
                    {data[Modal].rules.map((rule) => (
                      <li key={rule}>{rule}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <section>
        <div className="py-8 ml-2 md:ml-5">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-4 md:px-14">
              <p className="text-3xl font-bold md:text-5xl mb-3 text-logoYellow uppercase tracking-loose">
                Timeline
              </p>
              {/* <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
              Working Process of Fest
            </p> */}
              <p className="text-sm md:text-base text-gray-50 mb-4">
                Here&apos;s your guide to BrainRush 2K23. Go through all the
                steps to know the exact process of the events.
              </p>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div
                    className="border-2-2 border-logoYellow absolute h-full border"
                    style={{
                      right: "50%",
                      border: "2px solid #FFBD59",
                      borderRadius: "1%",
                    }}
                  />
                  <div
                    className="border-2-2 border-logoYellow absolute h-full border"
                    style={{
                      left: "50%",
                      border: "2px solid #FFBD59",
                      borderRadius: "1%",
                    }}
                  />
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12" />
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-logoYellow">
                        10:00 - 10:30
                      </p>
                      <h4 className="mb-3 font-bold  text-gray-100 text-right text-sm md:text-2xl">
                        𝙸𝚗𝚊𝚞𝚐𝚞𝚛𝚊𝚝𝚒𝚘𝚗
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Lighting of the Lamp & Dignitaries&apos; Speech
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12" />
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-logoYellow">
                        10:50 - 12:30
                      </p>
                      <h4 className="mb-5 font-bold  text-gray-100 text-sm md:text-2xl">
                        𝙱𝚛𝚊𝚒𝚗 𝚃𝚎𝚊𝚜𝚎𝚛
                      </h4>
                      <button
                        onClick={() => {
                          setModal(0);
                          Show == "flex" ? setShow("hidden") : setShow("flex");
                        }}
                        data-modal-hide="small-modal"
                        type="button"
                        // className="text-sm md:text-base bg-transparent mr-auto hover:bg-yellow-500 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-1 px-2 md:py-2 md:px-4 border border-yellow-300 hover:border-transparent"
                      >
                        <Buttons title={"Explore Now"} />
                      </button>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12" />
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-logoYellow">
                        12:45 - 13:45
                      </p>
                      <h4 className="mb-5 font-bold text-gray-100 text-sm md:text-2xl">
                        𝙸𝚗𝚗𝚘𝚟𝚎𝚜𝚝
                      </h4>
                      <button
                        onClick={() => {
                          setModal(1);
                          Show == "flex" ? setShow("hidden") : setShow("flex");
                        }}
                        data-modal-hide="small-modal"
                        type="button"
                        // className="text-sm md:text-base bg-transparent mr-auto hover:bg-yellow-500 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-1 px-2 md:py-2 md:px-4 border border-yellow-300 hover:border-transparent"
                      >
                        <Buttons title={"Explore Now"} />
                      </button>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12" />
                    <div className="order-1 w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-logoYellow">
                        13:45 - 14:45
                      </p>
                      <h4 className="mb-3 font-bold text-gray-100 text-sm md:text-2xl">
                        𝙻𝚞𝚗𝚌𝚑 𝚃𝚒𝚖𝚎
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Refreshments will be offered from our side to the
                        qualifying teams.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12" />
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-logoYellow">
                        14:45 - 15:45
                      </p>
                      <h4 className="mb-5 font-bold text-gray-100 text-sm md:text-2xl">
                        𝙴𝚡𝚙𝚛𝚎𝚜𝚜𝚒𝚘𝚗 𝙴𝚡𝚝𝚛𝚊𝚟𝚊𝚐𝚊𝚗𝚣𝚊
                      </h4>
                      <button
                        onClick={() => {
                          setModal(2);
                          Show == "flex" ? setShow("hidden") : setShow("flex");
                        }}
                        data-modal-hide="small-modal"
                        type="button"
                        // className="text-sm md:text-base bg-transparent mr-auto hover:bg-yellow-500 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-1 px-2 md:py-2 md:px-4 border border-yellow-300 hover:border-transparent"
                      >
                        <Buttons title={"Explore Now"} />
                      </button>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12" />
                    <div className="order-1 w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-logoYellow">
                        15:45 - 16:20
                      </p>
                      <h4 className="mb-5 font-bold text-gray-100 text-sm md:text-2xl">
                        𝚂𝚝𝚞𝚙𝚎𝚏𝚢
                      </h4>
                      <button
                        onClick={() => {
                          setModal(3);
                          Show == "flex" ? setShow("hidden") : setShow("flex");
                        }}
                        data-modal-hide="small-modal"
                        type="button"
                        // className="text-sm md:text-base bg-transparent mr-auto hover:bg-yellow-500 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-1 px-2 md:py-2 md:px-4 border border-yellow-300 hover:border-transparent"
                      >
                        <Buttons title={"Explore Now"} />
                      </button>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12" />
                    <div className="order-1  w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-logoYellow">
                        16:20 - 16:30
                      </p>
                      <h4 className="mb-3 font-bold text-gray-100 text-sm md:text-2xl ">
                        𝙿𝚛𝚒𝚣𝚎 𝙳𝚒𝚜𝚝𝚛𝚒𝚋𝚞𝚝𝚒𝚘𝚗
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 ">
                        The winners will be announced by our team and prizes
                        would be distributed.
                      </p>
                    </div>
                  </div>
                </div>
                <Image
                  className="mx-auto -mt-8"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                  alt="svg-modal"
                  width="300"
                  height="300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
