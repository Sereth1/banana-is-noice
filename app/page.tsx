"use client";

import { useState } from "react";
import Banana3d from "./components/animation/Banana3d";
import SendBanana from "./components/forms/SendBanana";
import Header from "./components/headerFooter/Header";
import WhyCards from "./components/mainPage/WhyCards";

export default function Home() {
  const [loading, setIsLoading] = useState(false);
  setTimeout(() => {
    setIsLoading(true);
  }, 500);
  return (
    <main>
      {loading && (
        <>
          {" "}
          <Header />
          <Banana3d />
          <SendBanana />
          <WhyCards />
        </>
      )}
    </main>
  );
}
