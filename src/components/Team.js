import Image from "next/image";
import Link from "next/link";
import React from "react";
import Heading from "./Heading";
import data from "team_data.js";
import whatsapp from "src/images/whatsapp.png";


// import gourav from "src/images/gourav.jpeg";

const Team = () => {
    return (
        <>
            <Heading title={"Team"} />

            <div className="text-white flex justify-center items-center ">
                <ul className="flex gap-10 h-72 overflow-x-scroll scrollbar">
                    {data.map((item) => (
                        <li className="px-8 w-64 " key={item.id}>
                            <Link href={item.whatsapp ? item.whatsapp : "#"}>
                                <div className="w-48 flex gap-3 flex-col justify-center items-center">
                                    <div className="relative w-48 h-48">
                                        <img
                                            className="h-48 w-48 border-logoYellow border-4 object-cover shadow-lg rounded-full object-top align-middle"
                                            src={item.photo}
                                            alt=""
                                        />
                                        <div className="absolute top-0 -right-5 h-16 w-16 text-4xl  rounded-full z-2">{item.emoji}</div></div>
                                    <div className="w-48 flex gap-3 justify-center items-center py-1 bg-logoYellow rounded-lg">
                                        <Image src={whatsapp} alt="whatsapp" className="w-8 h-8" />
                                        <h1 className="text-2xl text-background">{item.name}</h1>
                                    </div>

                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* <div class="flex flex-wrap justify-center overflow">
                <div class="relative w-48 h-48">
                    <img class="h-36 w-36 object-cover shadow-lg rounded-full object-top align-middle border-none" src="https://res.cloudinary.com/communichat/image/upload/v1679582400/a991cjzctpah2tuo2b2w.jpg" alt="user image" />
                    <div class="absolute top-0 right-7 h-16 w-16 text-4xl  rounded-full z-2">&#128512;</div>
                </div>
            </div>
            <Link href="http://wa.me/+919123737704"
                target="_blank">
                <svg style={{ "color": "rgb(255, 189, 89)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 20 20"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" fill="#ffbd59"></path> </svg>
                <h2>Harsh</h2>
            </Link> */}
        </>
    );
};

export default Team;
