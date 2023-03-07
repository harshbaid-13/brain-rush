"use client";
import React, { useState } from "react";
import data from "data.js";
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
              "fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full justify-center items-center " +
              Show
            }
          >
            <div className="relative w-full h-full max-w-2xl md:h-auto">
              <div className="relative rounded-lg shadow bg-gray-700">
                <div className="flex items-center justify-between p-5 border-b rounded-t border-gray-500">
                  <h3 className="text-4xl font-medium text-white">
                    {data[Modal].name}
                  </h3>

                  <button
                    onClick={handleClick}
                    type="button"
                    className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
                    data-modal-hide="small-modal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
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
                <div className="p-6 space-y-3">
                  <h2 className="mb-1 text-2xl font-semibold text-gray-100">
                    Rules
                  </h2>
                  <ol className="max-w-xl space-y-1 text-xl text-gray-300 list-decimal list-inside">
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
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="text-3xl md:text-4xl mb-3 text-yellow-300 uppercase tracking-loose">
                Timeline
              </p>
              {/* <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
              Working Process of Fest
            </p> */}
              <p className="text-sm md:text-base text-gray-50 mb-4">
                Here's your guide to the brain rush 2023 process. Go through all
                the steps to know the exact process of the fest.
              </p>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{
                      right: "50%",
                      border: "2px solid #FFC100",
                      borderRadius: "1%",
                    }}
                  />
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{
                      left: "50%",
                      border: "2px solid #FFC100",
                      borderRadius: "1%",
                    }}
                  />
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12" />
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-yellow-300">
                        10:00 - 10:30
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Inauguration
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Lighting of the Lamp & Dignitaries' Speech
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12" />
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-yellow-300">
                        11:00 - 11:30
                      </p>
                      <h4 className="mb-5 font-bold text-lg md:text-2xl">
                        CODIFY - Round I
                      </h4>
                      <button
                        onClick={() => {
                          setModal(0);
                          Show == "flex" ? setShow("hidden") : setShow("flex");
                        }}
                        data-modal-hide="small-modal"
                        type="button"
                        className="text-sm md:text-base bg-transparent mr-auto hover:bg-yellow-500 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-1 px-2 md:py-2 md:px-4 border border-yellow-300 hover:border-transparent"
                      >
                        Explore Now
                      </button>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12" />
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-yellow-300">
                        12:50 - 13:20
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Lunch Time
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Refreshments will be offered from our side to the
                        qualifying teams.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12" />
                    <div className="order-1 w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-yellow-300">
                        13:20 - 14:00
                      </p>
                      <h4 className="mb-5 font-bold text-lg md:text-2xl">
                        PSEUDO-SIAN
                      </h4>
                      <button
                        onClick={() => {
                          setModal(1);
                          Show == "flex" ? setShow("hidden") : setShow("flex");
                        }}
                        data-modal-hide="small-modal"
                        type="button"
                        className="text-sm md:text-base bg-transparent mr-auto hover:bg-yellow-500 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-1 px-2 md:py-2 md:px-4 border border-yellow-300 hover:border-transparent"
                      >
                        Explore Now
                      </button>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12" />
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-yellow-300">
                        14:15 - 15:15
                      </p>
                      <h4 className="mb-5 font-bold text-lg md:text-2xl">
                        CODATOR
                      </h4>
                      <button
                        onClick={() => {
                          setModal(2);
                          Show == "flex" ? setShow("hidden") : setShow("flex");
                        }}
                        data-modal-hide="small-modal"
                        type="button"
                        className="text-sm md:text-base bg-transparent mr-auto hover:bg-yellow-500 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-1 px-2 md:py-2 md:px-4 border border-yellow-300 hover:border-transparent"
                      >
                        Explore Now
                      </button>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12" />
                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-yellow-300">
                        15:30 - 16:00
                      </p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                        Prize Distribution
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The winners will be announced by our team and prizes
                        would be distributed.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  className="mx-auto -mt-36 md:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
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
