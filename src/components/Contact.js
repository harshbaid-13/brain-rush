import Image from "next/image";
import React from "react";
import whatsapp from "src/images/whatsapp.svg";
import gourav from "src/images/gourav.jpeg";

const Contact = () => {
    return <section className="bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">CONTACT</h2>
            </div>
            <div className="grid gap-8 mb-6">
                <div className="items-center  shadow sm:flex bg-gray-800 border-gray-700">
                    <a href="wa.me/+919123737704">
                        <Image className="w-full rounded-lg sm:rounded-lg" src={gourav} alt="Gourav Banerjee" height={250} width={250} />
                    </a>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-white">
                            <a href="wa.me/+919123737704">Gourav Banerjee</a>
                        </h3>
                        <span className="text-gray-400">Student Co-ordinator</span>
                        <p className="mt-3  font-light text-gray-400"> CSE Department </p>
                        <p className="mt-1 mb-4 font-light text-gray-400"> 4th year </p>
                        <ul className="flex space-x-4 sm:mt-0">
                            <li>
                                <a href="wa.me/+919123737704" className="text-gray-500  hover:text-white">
                                    <Image src={whatsapp} alt="my gif" height={25} width={25} />
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>;
};

export default Contact;
