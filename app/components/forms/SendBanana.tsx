import React, { useRef, useState, useEffect, FormEvent } from "react";
import gsap from "gsap";
import Image from "next/image";
import BananaPopUp from "../cards/BananaPopUp";
import { bananaData } from "@/app/data/bananaSendData";

export default function SendBanana() {
  const [name, setName] = useState<string>("");
  const [fromName, setFromName] = useState<string>("");
  const [bananaType, setBananaType] = useState<string>("good");
  const [showBananas, setShowBananas] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [generatedLink, setGeneratedLink] = useState<string>("");
  const elementsRef = useRef<(HTMLImageElement | null)[]>([]);

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShowBananas(true);

    const url = `${window.location.origin}/SendBanana?name=${encodeURIComponent(
      name
    )}&fromName=${encodeURIComponent(fromName)}&bananaType=${encodeURIComponent(
      bananaType
    )}`;
    setGeneratedLink(url);

    setIsActive(true);

    setName("");
    setFromName("");
    setBananaType("good");
  }

  useEffect(() => {
    if (showBananas) {
      elementsRef.current.forEach((element, index) => {
        if (element) {
          element.style.visibility = "visible";
          element.style.opacity = "1";

          gsap.fromTo(
            element,
            {
              visibility: "hidden",
              y: "-100%",
              x: `${Math.random() * 100}vw`,
              opacity: 1,
            },
            {
              visibility: "visible",
              duration: 2,
              y: "100vh",
              opacity: 1,
              ease: "power1.in",
              delay: index * 0.05,
              onComplete: () => {
                element.style.visibility = "hidden";
              },
            }
          );
        }
      });

      const timer = setTimeout(() => {
        setShowBananas(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showBananas]);

  return (
    <div id="sendBanana" className="">
      <div className="bg-goldenBanana shadow-lg pb-20 pt-20 lg:flex lg:justify-evenly relative grid gap-6 p-4 text-center lg:text-left">
        <BananaPopUp
          setIsActive={setIsActive}
          isActive={isActive}
          generatedLink={generatedLink}
        />
        <div className="max-w-xl space-y-4 lg:space-y-8">
          <h1 className="text-xl font-bold lg:text-2xl">
            Send a Banana: Surprise Your Friend, Prank Your Enemy, Woo Your
            Lover, or Confuse a Stranger!
          </h1>
          <div className="space-y-2 lg:space-y-4">
            {bananaData.map((el, i) => (
              <p className="text-sm lg:text-lg" key={i}>
                {el}
              </p>
            ))}
          </div>
        </div>
        <div
          className="w-full bg-cover bg-center bg-no-repeat rounded-lg lg:w-1/3 lg:h-[96] h-[96]"
          style={{
            backgroundImage: "url('/form/bananaForm.jpg')",
          }}
        >
          <div className="p-4 text-lightBeige bg-black bg-opacity-50 h-full rounded-lg">
            <h1 className="text-2xl font-bold mb-2 lg:mb-4 lg:text-4xl">
              Send Banana
            </h1>

            <form
              className="space-y-6 lg:space-y-10"
              onSubmit={handleFormSubmit}
            >
              <div>
                <label htmlFor="name" className="block text-sm lg:text-lg">
                  To Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 text-black bg-lightBeige rounded"
                  placeholder="To name"
                  required
                />
              </div>

              <div>
                <label htmlFor="fromName" className="block text-sm lg:text-lg">
                  From Name:
                </label>
                <input
                  type="text"
                  id="fromName"
                  value={fromName}
                  onChange={(e) => setFromName(e.target.value)}
                  className="w-full p-2 text-black bg-lightBeige rounded"
                  placeholder="From name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm lg:text-lg">
                  Choose a Banana:
                </label>
                <select
                  className="w-full p-2 bg-lightBeige text-black rounded"
                  value={bananaType}
                  onChange={(e) => setBananaType(e.target.value)}
                >
                  <option value="good">Good Banana</option>
                  <option value="lovable">Lovable Banana</option>
                  <option value="mean">Mean Banana</option>
                  <option value="angry">Angry Banana</option>
                </select>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-goldenBanana text-black font-bold py-2 px-4 rounded hover:bg-yellow-600"
                >
                  Send Banana
                </button>
              </div>
            </form>
          </div>
        </div>

        {showBananas && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 200 }).map((_, index) => (
              <Image
                key={index}
                ref={(el) => {
                  elementsRef.current[index] = el;
                }}
                width={50}
                height={50}
                src="/bananaIcons/regularBanana.png"
                alt="Banana"
                className="absolute w-6 h-6 lg:w-10 lg:h-10"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
