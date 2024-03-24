"use client";
import { useState } from "react";
import Image from "next/image";

type CSSClass = string | boolean;
function csx(...cs: CSSClass[]) {
  return cs.filter(Boolean).join(" ");
}

export default function WhitepaperSection() {
  const [isViewingPepper, setIsViewingPepper] = useState(false);

  return (
    <div
      id="whitepeper"
      className="relative h-full w-full flex flex-col items-center justify-center max-w-[1500px]"
    >
      <Image
        className={csx(
          "absolute cursor-pointer top-[50%] md:top-[20%] w-[75%] md:w-[50%] transition hover:scale-105 rotate-[-24deg]",
          isViewingPepper ? "left-[-10%] md:left-[11%]" : "left-[33%]"
        )}
        style={{ transitionProperty: "all" }}
        src="/papermonk.png"
        height={500}
        width={500}
        alt="Tokenomiqs"
      />
      <Image
        className="relative cursor-pointer w-[90%] md:w-[50%]"
        src="/whitepaper.png"
        height={500}
        width={500}
        alt="Tokenomiqs"
      />
      <Image
        className={csx(
          "absolute top-0 cursor-pointer transition hover:scale-105 w-[90%] md:w-[50%]",
          isViewingPepper ? "left-[50%] rotate-12" : "left-[12%] md:left-[28%]"
        )}
        style={{ transitionProperty: "all" }}
        onClick={() => setIsViewingPepper(!isViewingPepper)}
        src="/whitecover.png"
        height={500}
        width={500}
        alt="Tokenomiqs"
      />
    </div>
  );
}
