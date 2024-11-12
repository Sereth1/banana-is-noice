"use client";

import { useState } from "react";
import Banana3d from "./components/animation/Banana3d";
import SendBanana from "./components/forms/SendBanana";
import Header from "./components/headerFooter/Header";
import WhyCards from "./components/mainPage/WhyCards";
import DropDownMenu from "./components/common/DropDownMenu";
import BananaFooter from "./components/headerFooter/Footer";

export default function Home() {
  const [loading, setIsLoading] = useState(false);

  return (
    <main>
      <Header />
      <Banana3d />
      <SendBanana />
      <WhyCards />
      <DropDownMenu />
      <BananaFooter />
    </main>
  );
}
