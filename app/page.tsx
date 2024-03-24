"use client";
import Image from "next/image";
import { useState } from "react";

type CSSClass = string | boolean;
function csx(...cs: CSSClass[]) {
  return cs.filter(Boolean).join(" ");
}

export default function Home() {
  const [isViewingPepper, setIsViewingPepper] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center bg-white overflow-hidden">
      <div className="bg-spatter min-h-screen w-full fixed"></div>
      <div className="h-full w-full flex items-center justify-center relative max-w-[1600px] pt-24">
        <Image
          className="relative sm:w-full md:w-[70%] lg:w-[55%]"
          src="/monksmain.png"
          height={500}
          width={500}
          alt="$MONKS"
        />
        <a
          href="#tokenomics"
          className="absolute left-[10%] rotate-[12deg] hover:scale-110 cursor-pointer w-[25%]"
        >
          <Image
            src="/link_tokenomics.png"
            height={200}
            width={400}
            alt="Tokenomiqs"
          />
        </a>
        <a
          href="#presale"
          className="absolute left-[8%] bottom-[22%] rotate-[-12deg] hover:scale-110 cursor-pointer w-[35%]"
        >
          <Image
            className="w-full"
            src="/link_presale.png"
            height={200}
            width={400}
            alt="Tokenomiqs"
          />
        </a>
        <a
          href="#whitepeper"
          className="absolute bottom-[42%] right-[10%] rotate-[-12deg] hover:scale-110 cursor-pointer w-[25%]"
        >
          <Image
            src="/link_whitepaper.png"
            height={200}
            width={400}
            alt="Tokenomiqs"
          />
        </a>
        <div className="absolute flex z-100 left-[62%] bottom-[23%] w-[60%] rotate-[12deg]">
          <a
            href="https://x.com/inj_monks"
            className="rotate-[-12deg] hover:scale-110 cursor-pointer w-[25%]"
          >
            <Image
              className="w-full"
              src="/link_x.png"
              height={200}
              width={300}
              alt="Tokenomiqs"
            />
          </a>
          <a className="rotate-[12deg] hover:scale-110 cursor-pointer w-[25%]">
            <Image
              className="w-full"
              src="/link_telegram.png"
              height={200}
              width={300}
              alt="Tokenomiqs"
            />
          </a>
        </div>
      </div>
      <div className="h-full w-full flex items-center justify-center relative">
        <Image
          className="relative top-[-50px]"
          src="/rule.png"
          height={500}
          width={1000}
          alt="$MONKS"
        />
      </div>
      <div
        id="presale"
        className="h-full w-full flex items-center justify-center relative max-w-[1600px]"
      >
        <Image
          className={csx(
            "relative top-0 left-[-10%] rotate-[-6deg] cursor-pointer w-[40%] transition hover:scale-105"
          )}
          src="/presaleinfo.png"
          height={500}
          width={500}
          alt="Tokenomiqs"
        />
        <Image
          className={csx(
            "absolute top-0 left-[50%] cursor-pointer w-[40%] transition hover:scale-105"
          )}
          src="/gimmesuck.png"
          height={500}
          width={500}
          alt="Tokenomiqs"
        />
      </div>
      <div
        id="tokenomics"
        className="h-full w-full flex items-center justify-center relative max-w-[1600px]"
      >
        <Image
          className="cursor-pointer w-[50%]"
          src="/tokenomics.png"
          height={500}
          width={500}
          alt="Tokenomiqs"
        />
      </div>
      <div
        id="whitepeper"
        className="relative h-full w-full flex flex-col items-center justify-center mt-16"
      >
        <Image
          className={csx(
            "absolute cursor-pointer w-[50%] transition hover:scale-105 rotate-12",
            isViewingPepper ? "top-[-25%]" : "top-0"
          )}
          style={{ transitionProperty: "all" }}
          src="/papermonk.png"
          height={500}
          width={500}
          alt="Tokenomiqs"
        />
        <Image
          className="relative cursor-pointer w-[50%]"
          src="/whitepaper.png"
          height={500}
          width={500}
          alt="Tokenomiqs"
        />
        <Image
          className={csx(
            "absolute top-0 cursor-pointer w-[50%] transition hover:scale-105",
            isViewingPepper ? "left-[50%] rotate-12" : "left-[28%]"
          )}
          style={{ transitionProperty: "all" }}
          onClick={() => setIsViewingPepper(!isViewingPepper)}
          src="/whitecover.png"
          height={500}
          width={500}
          alt="Tokenomiqs"
        />
      </div>
      <div className="h-full w-full flex items-center justify-center relative mt-20">
        <Image
          className="relative top-[-50px]"
          src="/rule2.png"
          height={500}
          width={1000}
          alt="$MONKS"
        />
      </div>
      {/* <div
        id="tokenomics"
        className="h-full w-full flex items-center justify-center relative max-w-[1600px]"
      >
        <Image
          className="cursor-pointer w-[50%]"
          src="/footer.png"
          height={500}
          width={500}
          alt="Tokenomiqs"
        />
      </div> */}

      {/* <Image
          className="absolute left-[100px] top-[350px] rotate-[12deg] hover:scale-110 cursor-pointer"
          src="/link_tokenomics.png"
          height={200}
          width={400}
          alt="Tokenomiqs"
        />
        <Image
          className="absolute right-[100px] top-[350px] rotate-[-12deg] hover:scale-110 cursor-pointer"
          src="/link_whitepaper.png"
          height={200}
          width={400}
          alt="Tokenomiqs"
        />
        <Image
          className="absolute bottom-[-50px] left-[600px] rotate-[-12deg] hover:scale-110 cursor-pointer"
          src="/link_x.png"
          height={200}
          width={300}
          alt="Tokenomiqs"
        />
        <Image
          className="absolute bottom-[-50px] right-[600px] rotate-[12deg] hover:scale-110 cursor-pointer"
          src="/link_telegram.png"
          height={200}
          width={300}
          alt="Tokenomiqs"
        />
      </div> */}
      {/* <Image src="/chain.png" height={500} width={500} alt="$MONKS" /> */}
    </main>
  );
}
