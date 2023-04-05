import React, { useState } from "react";
import Buttons from "./Buttons";
import RoomData from "room_data.js";

function CheckRoom() {
  const [input, setInput] = useState("");
  const [invalid, setInvalid] = useState(false);

  function closeModal() {
    document.getElementById("check-room").classList.add("hidden");
    document.getElementById("heading").classList.remove("hidden");
    document.getElementById("input").classList.remove("hidden");
    document.getElementById("description").classList.remove("hidden");
    document.getElementById("submit-btn").classList.remove("hidden");
    document.getElementById("cancel-btn").classList.remove("hidden");
    document.getElementById("close-btn").classList.add("hidden");
    document.getElementById("result").classList.add("hidden");
    setInvalid(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setInvalid(false);
    setInput(input.trim());
    let output = "";
    RoomData.map((room) => {
      if (
        room.tokens.find((token) => {
          return token == input;
        })
      ) {
        output = room.id;
      }
    });
    if (output != "") {
      setInvalid(false);
      document.getElementById("result").innerHTML =
        "Your Room Number is " + output;
      document.getElementById("heading").classList.add("hidden");
      document.getElementById("input").classList.add("hidden");
      document.getElementById("description").classList.add("hidden");
      document.getElementById("submit-btn").classList.add("hidden");
      document.getElementById("cancel-btn").classList.add("hidden");
      document.getElementById("close-btn").classList.add("inline-block");
      document.getElementById("close-btn").classList.remove("hidden");
      document.getElementById("result").classList.remove("hidden");
    } else {
      setInvalid(true);
    }
  }

  return (
    <>
      <div
        className="fixed z-40 inset-0 overflow-y-auto backdrop-blur-lg"
        id="check-room"
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
          <div className="inline-block align-bottom bg-background border-logoYellow border rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <form onSubmit={handleSubmit}>
              <div className="p-6 flex items-center justify-center flex-col text-logoYellow">
                <div
                  className="my-4 text-center font-bold text-xl"
                  id="heading"
                >
                  Check your Room Number
                </div>
                <div
                  className="hidden my-4 text-center font-bold text-xl"
                  id="result"
                ></div>
                <div className="mb-2" id="input">
                  <input
                    className="shadow appearance-none text-center border rounded w-80 py-2 px-3 text-background leading-tight font-bold focus:outline-none focus:shadow-outline"
                    id="input"
                    type="text"
                    placeholder="Enter Token Number"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                  />
                </div>

                <div className="my-2 text-center" id="description">
                  *Token number is provided in the payment slip (Ex: 14xxx)
                </div>
              </div>
              <div className="px-6 pb-6 text-center">
                <button
                  type="submit"
                  className="inline-block border focus:outline-none ml-2"
                  id="submit-btn"
                >
                  <Buttons title={"SUBMIT"} />
                </button>
                <button
                  type="button"
                  className="inline-block border focus:outline-none ml-2"
                  onClick={closeModal}
                  id="cancel-btn"
                >
                  <Buttons title={"CANCEL"} />
                </button>
                <button
                  type="button"
                  className="hidden border focus:outline-none ml-2"
                  onClick={closeModal}
                  id="close-btn"
                >
                  <Buttons title={"CLOSE"} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {invalid && (
        <div className="flex items-center justify-center">
          <div
            id="toast-bottom-left"
            className="z-40 fixed flex items-center justify-between w-full max-w-xs p-4 space-x-4 text-white bg-red divide-x divide-gray-200 rounded-lg shadow bottom-5 space-x"
            role="alert"
          >
            <div className="text-md font-medium">INVALID TOKEN NUMBER</div>
            <button
              type="button"
              className="ml-auto -mx-2 -my-2 bg-white text-red rounded-sm inline-flex justify-center items-center h-6 w-6 "
              data-dismiss-target="#toast-warning"
              aria-label="Close"
              onClick={(e) => {
                document
                  .getElementById("toast-bottom-left")
                  .classList.add("hidden");
                document
                  .getElementById("toast-bottom-left")
                  .classList.remove("flex");
                setInvalid(false);
              }}
            >
              <span className="sr-only">Close</span>
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
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CheckRoom;
