import React, { useState } from "react";
import Buttons from "./Buttons";

function CheckRoom() {
    const [input, setInput] = useState("");

    function openModal() {
        document.getElementById("check-room").classList.remove("hidden");
    }

    function closeModal() {
        document.getElementById("check-room").classList.add("hidden");
    }

    function handleSubmit(event) {
        event.preventDefault();
        const output = `You entered: ${input}`;
        alert(output);
        closeModal();
    }

    return (
        <>
            {/* Modal */}
            <div
                className="fixed z-40  inset-0 overflow-y-auto backdrop-blur-lg"
                id="check-room"
            >
                <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
                    {/* Modal content */}
                    <div className="inline-block align-bottom bg-background border-logoYellow border rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <form onSubmit={handleSubmit}>
                            <div className="p-6 flex items-center justify-center flex-col text-logoYellow">
                                <div className="my-4 text-center font-bold text-xl">
                                    Check your Room Number
                                </div>
                                <div className="mb-2">
                                    <input
                                        className="shadow appearance-none text-center border rounded w-80 py-2 px-3 text-background leading-tight font-bold focus:outline-none focus:shadow-outline"
                                        id="input"
                                        type="text"
                                        placeholder="Enter Token Number"
                                        value={input}
                                        onChange={(event) => setInput(event.target.value)}
                                    />
                                </div>
                                <div className="my-2 text-center">
                                    *Token number is provided in the payment slip (Ex: 14xxx)
                                </div>
                            </div>
                            <div className="px-6 pb-6 text-center">
                                <button
                                    type="submit"
                                    className="inline-block border focus:outline-none ml-2"
                                    onClick={closeModal}
                                >
                                    <Buttons title={"SUBMIT"} />
                                </button>
                                <button
                                    type="button"
                                    className="inline-block border focus:outline-none ml-2"
                                    onClick={closeModal}
                                >
                                    <Buttons title={"CANCEL"} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div >
            </div >

            {/* Trigger button */}
            < button
                type="button"
                className="inline-block px-4 py-2 leading-none border rounded text-white bg-blue-500 hover:bg-blue-600 hover:text-white focus:outline-none"
                onClick={openModal}
            >
                Open Modal
            </button >
        </>
    );
}

export default CheckRoom;
