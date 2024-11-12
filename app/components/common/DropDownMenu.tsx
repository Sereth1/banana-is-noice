"use client";
import { gsap } from "gsap";
import React, { useRef, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { bananaDropDownData } from "../../data/bananaDropDownData";
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLSpanElement | null>(null);

  React.useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = "0px";
    }
  }, []);

  React.useEffect(() => {
    if (contentRef.current && iconRef.current) {
      if (isOpen) {
        gsap.to(contentRef.current, {
          maxHeight: contentRef.current.scrollHeight,
          duration: 0.8,
          ease: "power2.out",
        });
        gsap.to(iconRef.current, {
          rotation: 90,
          duration: 0,
          ease: "power2.out",
        });
      } else {
        gsap.to(contentRef.current, {
          maxHeight: 0,
          duration: 0.8,
          ease: "power2.out",
        });
        gsap.to(iconRef.current, {
          rotation: 0,
          duration: 0,
          ease: "power2.out",
        });
      }
    }
  }, [isOpen]);

  return (
    <div className="border-b max-w-[880px] text-black border-gray-300 mb-4 rounded-xl bg-lightBeige">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full p-4 text-left text-lg"
      >
        {question}
        <span ref={iconRef} className="transition-transform duration-300">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden  text-gray-700 rounded-xl px-4"
        style={{ maxHeight: 0 }}
      >
        <p className="py-4">{answer}</p>
      </div>
    </div>
  );
};
const DropDownMenu: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div id="justWhy" className="">
      <div className="bg-goldenBanana lg:max-h-[672px] lg:h-[640px]   pb-20 ">
        <h2 className="text-center text-7xl text-hightLight pt-10 pb-10">
          Why Banana
        </h2>
        <div className=" lg:flex lg:justify-center  lg:pt-9 gap-8 ">
          <div id="faq" className="max-w-fit p-5 lg:p-0">
            {bananaDropDownData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
