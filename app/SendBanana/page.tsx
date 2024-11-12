"use client";

import { Suspense } from "react";
import BananaContent from "../components/SendBananaPage/BananaContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BananaContent />
    </Suspense>
  );
}
