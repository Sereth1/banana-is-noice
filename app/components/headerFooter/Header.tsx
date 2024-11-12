import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

interface HeaderData {
  text: string;
  href: string;
}

export default function Header() {
  gsap.registerPlugin(TextPlugin);

  const textRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const animateTextSequence = (ref: HTMLAnchorElement, texts: string[]) => {
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

  const headerData: HeaderData[] = [
    { text: "Send a Bananaaa", href: "#sendBanana" },
    { text: "About", href: "#about" },
    { text: "Just Why", href: "#justWhy" },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-goldenBanana">
      <div className="p-5 cursor-pointer">
        <nav className="bg-yellow-300 w-full shadow-hightLight p-4 shadow-lg h-20 centerEl rounded-md">
          <div className="bg-lightBeige justify-evenly flex shadow-2xl w-full rounded-3xl p-3">
            {headerData.map((el, index) => (
              <a
                key={el.text}
                href={el.href}
                onClick={(e) => handleSmoothScroll(e, el.href)}
                className="flex justify-evenly hover:scale-125 duration-500  text-hightLight"
                ref={(element) => {
                  textRefs.current[index] = element;
                }}
                style={{ visibility: "hidden" }}
              >
                {el.text}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
