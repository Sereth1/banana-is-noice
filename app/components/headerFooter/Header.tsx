import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

export default function Header() {
  gsap.registerPlugin(TextPlugin);

  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const animateTextSequence = (ref: HTMLDivElement, texts: string[]) => {
      ref.style.visibility = "visible";
      texts.reduce((timeline, text, index) => {
        return timeline.to(ref, {
          text: text,
          duration: 1,
          ease: "power2.inOut",
          delay: index === 0 ? 0 : 0.5,
        });
      }, gsap.timeline());
    };

    textRefs.current.forEach((ref, index) => {
      if (ref) {
        animateTextSequence(ref, [
          "Banana",
          "is",
          "sooo",
          "soooo",
          "tasty",
          headerData[index].text,
        ]);
      }
    });
  }, []);

  const headerData = [
    { text: "Main", href: "" },
    { text: "About", href: "" },
    { text: "Just Why", href: "" },
    { text: "SpecialInfo", href: "" },
    { text: "Send a Bananaaa", href: "" },
  ];

  return (
    <div className="p-5 cursor cursor-pointer">
      <nav className="bg-yellow-300 w-full shadow-hightLight p-4 shadow-lg h-20 centerEl rounded-md">
        <div className="bg-lightBeige justify-evenly flex shadow-2xl w-full rounded-3xl p-3">
          {headerData.map((el, index) => (
            <div
              key={el.text}
              className="flex justify-evenly text-hightLight"
              ref={(el) => {
                textRefs.current[index] = el;
              }}
              style={{ visibility: "hidden" }}
            ></div>
          ))}
        </div>
      </nav>
    </div>
  );
}
