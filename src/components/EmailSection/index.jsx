"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/image/tecnologies/github.png";
import LinkeinIcon from "../../../public/image/tecnologies/linkedin.png";
import Link from "next/link";
import Image from "next/image";
import Form from "./Form";

export const EmailSection = () => {

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
        <Form />
      </div>
    </section>
  );
};
