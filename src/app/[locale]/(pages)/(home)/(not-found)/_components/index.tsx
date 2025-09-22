import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ComponentNot404() {
  return (
    <>
      <section>
        <div className="bg-[#000] w-full h-[100vh] flex justify-center items-center text-accent">
          <div>
           <div className="w-full mx-auto ">
             <Link href="/" className="absolute lg:w-[500px] w-[400px]  top-0 left-1/2 -translate-x-1/2">
              <Image
                loading="lazy"
                width={0}
                height={0}
                src="/images/i-sprint-light.svg"
                alt=""
                className="object-cover w-full"
              />
            </Link>
           </div>
            <h1 className="text-[12rem]">404</h1>
            <h2 className="text-white font-orbitron text-4xl">
              We can&apos;t find that page
            </h2>
            <Link
              href="/"
              className="uppercase no-underline mx-auto mt-5 block w-fit text-sm tracking-wider py-4  px-16 rounded-[2rem] bg-main text-white hover:opacity-80 transition"
            >
              Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
