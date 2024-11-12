import React from "react";
import WhyCard from "../cards/WhyCard";
import { whyCardsData } from "@/app/data/whyCardsData";

export default function WhyCards() {
  return (
    <div id="about" className="p-5">
      <div className="shadow-lg shadow-hightLight mt-5">
        <h2 className="text-center text-7xl mb-20 text-hightLight">
          All About Bananaaa
        </h2>
      </div>
      <div className="lg:flex lg:justify-evenly grid grid-cols-1 gap-10 justify-items-center items-center mx-auto">
        {whyCardsData.map((fact) => (
          <WhyCard {...fact} key={fact.key} />
        ))}
      </div>
    </div>
  );
}
