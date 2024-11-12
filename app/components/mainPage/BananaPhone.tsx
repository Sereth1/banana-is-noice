import Image from "next/image";
import React from "react";

export default function BananaPhone() {
  return (
    <div className="grid  justify-center">
      <div>
        <h2 className="text-goldenBanana text-8xl   ">Touch ma bananaaa </h2>
      </div>
      <BananaImage />
    </div>
  );
}

function BananaImage() {
  return (
    <div className="max-w-96 mt-20 ">
      <Image
        src="/bananaPhone/phonebanana.png"
        alt="Banana Phone"
        layout="responsive"
        width={1000}
        height={800}
      />
    </div>
  );
}
