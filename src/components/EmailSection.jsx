"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/image/tecnologies/github.png";
import LinkeinIcon from "../../public/image/tecnologies/linkedin.png";
import Link from "next/link";
import Image from "next/image";


export const EmailSection = () => {
  const [emailSubmmited, setEmailSubmmited] = useState();



  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    
    const endpoint = "/api/send";

    const response = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    console.log("resData-->", response);

    // const resData = await response.json();
    setEmailSubmmited(true);
    if (response.status === 200) {
      console.log("--> ENVIADO!");
    }
  };


  return (
    <section
      id="contac"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 blur-lg z-0 absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-5">
        <h5 className="text-xl font-bold text-white my-2">Lets Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          corrupti, ullam, assumenda architecto, asperiores deserunt accusamus
          voluptates et aspernatur veritatis molestias aliquid natus ipsam!
          Quaerat consequuntur fuga sapiente rerum ratione.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="github icon" width={30} />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkeinIcon} alt="linkedin icon" width={30} />
          </Link>
        </div>
      </div>
      <div className="border-4 border-[#1c1c1c] p-4 shadow-xl shadow-black ">
        <form
          className="flex flex-col "
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block  text-sm mb-2 font-medium"
            >
              Your mail
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="placeholder-[#9CA2A9] text-gray-100 text-sm block w-full p-2.5 shadow-inner  shadow-black  border-4 bg-[#170b3b3c] border-[#1c1c1c] focus:bg-[#2E2E2E] focus:none"
              placeholder="jacob@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block  mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="placeholder-[#9CA2A9] text-gray-100 text-sm  block w-full p-2.5 shadow-inner  shadow-black  border-4 bg-[#170b3b3c] border-[#1c1c1c] focus:bg-[#2E2E2E] focus:none"
              placeholder="quiero decir hola"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              {" "}
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="placeholder-[#9CA2A9] text-gray-100 text-sm  block w-full p-2.5 shadow-inner  shadow-black  border-4 bg-[#170b3b3c] border-[#1c1c1c] focus:bg-[#2E2E2E] focus:none"
              placeholder="Hola que tal"
            />
          </div>
          <button
            type="submit"
            className="shadow-black shadow  cursor-pointer px-6 py-3 text-xl w-full font-medium hover:text-[#BFFF00]"
          >
            send
          </button>
          {emailSubmmited && (
            <p class=" text-green text-sm mt-2">Mensaje enviado! 😊</p>
          )}
        </form>
      </div>
    </section>
  );
};
