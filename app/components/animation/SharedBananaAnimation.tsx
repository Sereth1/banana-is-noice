import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  bananaImg: string;
}

export default function SharedBananaAnimation({ bananaImg }: Props) {
  const animation = useRef(null);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    gsap.fromTo(
      animation.current,
      { y: "-100%", rotate: 0, visibility: "hidden" },
      { y: 0, rotate: 0, duration: 1.5, visibility: "visible" }
    );
  }, []);

  return (
    <div className="">
      {" "}
      {isActive && (
        <>
          {" "}
          <div className="absolute inset-0 justify-center flex top-1/2 z-50">
            <button
              onClick={() => setIsActive(!isActive)}
              className="p-5 hover:bg-lightBeige hover:text-black transition-transform duration-300 pl-10 pr-10 shadow-xl shadow-black text-lightBeige bg-hightLight h-fit w-fit rounded"
            >
              Read More
            </button>
          </div>
          <div
            ref={animation}
            className="absolute inset-0 z-30 justify-center items-center flex"
          >
            <Image
              width={1600}
              height={800}
              alt="bananana"
              src={bananaImg}
              className="w-2/4"
            />
          </div>
        </>
      )}
    </div>
  );
}
