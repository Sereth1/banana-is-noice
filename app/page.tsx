"use client";

import SendBanana from "./components/forms/SendBanana";
import Header from "./components/headerFooter/Header";
import WhyCards from "./components/mainPage/WhyCards";

export default function Home() {
  return (
    <main>
      <Header />
      <SendBanana />
      <WhyCards />
    </main>
  );
}
