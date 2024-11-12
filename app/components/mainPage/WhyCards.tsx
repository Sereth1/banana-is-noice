import React from "react";
import WhyCard from "../cards/WhyCard";

export default function WhyCards() {
  return (
    <div>
      <div className="shadow-lg shadow-hightLight mt-5 ">
        <h2 className="text-center   text-7xl mb-20 m-20 text-hightLight">
          All about bananaaa
        </h2>
      </div>
      <div className="lg:flex lg:justify-evenly grid grid-cols-1 justify-items-center items-center mx-auto">
        <WhyCard
          backTitle="yes"
          bgImg="/whyCard/bgImg/bgBanana.jpg"
          logoImg="/whyCard/icons/angryBanana.png"
          title="bananaas"
          description="absjudsanoasnsadpdsadbsasnap"
          key="edsaoksdo1"
        />
        <WhyCard
          backTitle="yes"
          bgImg="/whyCard/bgImg/bgBanana.jpg"
          logoImg="/whyCard/icons/angryBanana.png"
          title="bananaas"
          description="absjudsanoasnsadpdsadbsasnap"
          key="edsaoksdo2"
        />
        <WhyCard
          backTitle="yes"
          bgImg="/whyCard/bgImg/bgBanana.jpg"
          logoImg="/whyCard/icons/angryBanana.png"
          title="bananaas"
          description="absjudsanoasnsadpdsadbsasnap"
          key="edsaoksdo3"
        />
        <WhyCard
          backTitle="yes"
          bgImg="/whyCard/bgImg/bgBanana.jpg"
          logoImg="/whyCard/icons/angryBanana.png"
          title="bananaas"
          description="absjudsanoasnsadpdsadbsasnap"
          key="edsaoksdo4"
        />
      </div>
    </div>
  );
}
