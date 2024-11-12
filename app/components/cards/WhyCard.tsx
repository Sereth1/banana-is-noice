"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";

type Props = {
  title: string;
  description: string;
  backTitle: string;
  bgImg: string;
  logoImg: string;
};

export default function WhyCard({
  title,
  description,
  bgImg,
  backTitle,
  logoImg,
}: Props) {
  const frontRef = useRef(null);
  const backRef = useRef(null);

  const handleHover = () => {
    gsap.killTweensOf([frontRef.current, backRef.current]);

    const tl = gsap.timeline();

    tl.to(frontRef.current, {
      rotationX: 90,
      y: 20,
      duration: 1.1,
      ease: "power2.out",
      transformOrigin: "center bottom",
    });

    tl.fromTo(
      backRef.current,
      { scale: 0.8, y: 300, opacity: 1 },
      {
        scale: 1,
        y: 0,
        opacity: 1,
        duration: 1.6,
        ease: "power2.out",
      },
      "-=1"
    );
  };

  const handleHoverOut = () => {
    gsap.killTweensOf([frontRef.current, backRef.current]);

    const tl = gsap.timeline();

    tl.to(backRef.current, {
      opacity: 1,
      scale: 0.8,
      y: 300,
      duration: 1.6,
      transformOrigin: "center bottom",
      ease: "power2.out",
      onComplete: () => {
        gsap.set(backRef.current, { clearProps: "all" });
      },
    });

    tl.fromTo(
      frontRef.current,
      { rotationX: 90, y: 20 },
      {
        rotationX: 0,
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power2.out",
        transformOrigin: "center bottom",
        onComplete: () => {
          gsap.set(frontRef.current, { clearProps: "all" });
        },
      },
      "-=1.2"
    );
  };

  return (
    <div
      className="relative w-[300px] h-[400px]  sm:w-[250px] sm:h-[350px] md:w-[205px]  md:h-[375px] lg:w-[300px] lg:h-[400px] rounded-md shadow-black overflow-hidden shadow-lg bg-white mb-10 md:mb-20"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    >
      <div className="w-full h-full border-goldenBanana border-[4px]">
        <Image
          src={bgImg}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div
        ref={frontRef}
        className="absolute inset-0 flex flex-col items-center   justify-center mt-[250px] sm:mt-[230px] md:mt-[250px] lg:mt-[300px] transform"
      >
        <div className="p-4 absolute mb-28 sm:mb-20 md:mb-28 bg-hightLight border-2 border-goldenBanana shadow-md shadow-hightLight rounded-full flex items-center justify-center ">
          <Image src={logoImg} width={40} height={40} alt="Icon" />
        </div>
        <div className="bg-lightBeige  px-4 py-2 w-4/5 sm:w-11/12 h-[200px] sm:h-36 md:h-40 flex justify-center items-center  border-t-[5px] border-l-[5px] border-r-[5px] border-goldenBanana rounded-md shadow-md text-black text-center text-sm md:text-base">
          {title}
        </div>
      </div>

      <div
        ref={backRef}
        className="absolute inset-0 flex flex-col items-center justify-center mt-[250px] sm:mt-[230px] md:mt-[250px] lg:mt-[300px] xl:mt-[270px] transform opacity-0"
      >
        <div className="p-4 absolute mb-56 sm:mb-48 md:mb-60 rounded-full flex items-center justify-center">
          <Image src={logoImg} width={60} height={40} alt="Icon" />
        </div>
        <div className="bg-lightBeige max-h-60 p-6 sm:p-8 md:p-10 pb-24 sm:pb-20 md:pb-28  border-t-[5px] border-l-[5px] border-r-[5px] border-goldenBanana rounded-md shadow-md text-black text-center text-sm md:text-base">
          <div>
            <div className="text-[16px] md:text-[20px] pb-2 md:pb-4">
              {backTitle}
            </div>
            <div className="text-[12px] md:text-[14px]">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
