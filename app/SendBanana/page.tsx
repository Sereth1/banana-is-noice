"use client";
import { useSearchParams } from "next/navigation";
import { use, useEffect, useRef, useState } from "react";
import {
  angryBananaText,
  goodBananaText,
  lovableBananaText,
  meanBananaText,
} from "../data/bananaTexts";
import Image from "next/image";
import SharedBananaAnimation from "../components/animation/SharedBananaAnimation";
import gsap from "gsap";

export default function Page() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Someone Special";
  const fromName = searchParams.get("fromName") || "Anonymous";
  const bananaType = searchParams.get("bananaType") || "Regular Banana";
  const [isLoading, setIsLoading] = useState(false);
  const bananaImg = `/bananaMood/${bananaType}.png`;
  const ant = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ant.current,
      { scale: 0 },
      { scale: 1, duration: 1, ease: "power1" }
    );
  });

  const bananaTexts = (() => {
    switch (bananaType) {
      case "good":
        return goodBananaText;
      case "mean":
        return meanBananaText;
      case "angry":
        return angryBananaText;
      case "lovable":
        return lovableBananaText;
      default:
        return goodBananaText;
    }
  })();

  const [randomMessage, setRandomMessage] = useState(bananaTexts[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * bananaTexts.length);
    let selectedMessage = bananaTexts[randomIndex];

    if (["mean", "angry", "lovable"].includes(bananaType)) {
      selectedMessage = {
        ...selectedMessage,
        text: selectedMessage.text.replace("{name}", name),
      };
    }
    setIsLoading(true);
    setRandomMessage(selectedMessage);
  }, [bananaTexts, bananaType, name]);

  if (!isLoading) {
    return <div></div>;
  }

  return (
    <div className="overflow-hidden min-h-screen relative">
      <SharedBananaAnimation bananaImg={bananaImg} />
      <div className="bg-hightLight overflow-hidden ">
        <div className="p-10 bg-lightYellow min-h-screen flex flex-col  items-center justify-center">
          <h2 className="text-7xl font-bold mb-20 text-lightBeige">
            You&apos;ve been Banananaad!
          </h2>
          <div
            ref={ant}
            className="bg-goldenBanana z-0 p-40 rounded shadow-lg space-y-10 shadow-lightBeige text-center lg:w-2/3 overflow-hidden"
          >
            <p className="text-xl mb-4">
              <strong>To:</strong> {name}
            </p>
            <p className="text-xl mb-4">
              <strong>From:</strong> {fromName}
            </p>
            <p className="text-xl mb-4 ">
              <strong>Banana Type:</strong> {bananaType}
            </p>

            <p className="text-lg mt-6 pt-10">{randomMessage.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
