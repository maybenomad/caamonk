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
      <div className="h-full w-full flex items-center justify-center relative max-w-[1500px] pt-12">
        <Image
          className="relative sm:w-full md:w-[70%] lg:w-[55%]"
          src="/monksmain.png"
          height={500}
          width={500}
          alt="$MONKS"
        />
        <a
          href="#tokenomics"
          className="hidden md:block absolute left-[10%] rotate-[12deg] hover:scale-110 cursor-pointer w-[25%]"
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
          className="hidden md:block absolute left-[8%] bottom-[22%] rotate-[-12deg] hover:scale-110 cursor-pointer w-[35%]"
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
          className="hidden md:block absolute bottom-[42%] right-[10%] rotate-[-12deg] hover:scale-110 cursor-pointer w-[25%]"
        >
          <Image
            src="/link_whitepaper.png"
            height={200}
            width={400}
            alt="Tokenomiqs"
          />
        </a>
        <div className="hidden md:flex absolute z-100 left-[62%] bottom-[21%] w-[60%] rotate-[12deg]">
          <a
            href="https://x.com/inj_monks"
            target="_blank"
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
          <a
            href="https://t.me/monks_inj"
            target="_blank"
            className="rotate-[12deg] hover:scale-110 cursor-pointer w-[25%]"
          >
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
      <div className="block md:hidden flex z-100 justify-center pb-8">
        <a
          href="https://x.com/inj_monks"
          target="_blank"
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
        <a
          href="https://t.me/monks_inj"
          target="_blank"
          className="rotate-[12deg] hover:scale-110 cursor-pointer w-[25%]"
        >
          <Image
            className="w-full"
            src="/link_telegram.png"
            height={200}
            width={300}
            alt="Tokenomiqs"
          />
        </a>
      </div>
      <div className="h-full w-full flex items-center justify-center relative mt-12 md:mt-0">
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
        className="h-full w-full flex items-center justify-center relative max-w-[1500px]"
      >
        <Image
          className={csx(
            "relative top-0 left-[-10%] rotate-[-6deg] w-[70%] lg:w-[40%] transition"
          )}
          src="/presaleinfo.png"
          height={500}
          width={500}
          alt="Tokenomiqs"
        />
        <Image
          className={csx(
            "absolute top-0 w-[40%] transition",
            "left-[60%] top-[20%] md:left-[50%]"
          )}
          src="/gimmesuck.png"
          height={500}
          width={500}
          alt="Tokenomiqs"
        />
      </div>
      <div
        id="tokenomics"
        className="h-full w-full flex items-center justify-center relative max-w-[1500px]"
      >
        <Image
          className="w-[90%] md:w-[50%]"
          src="/tokenomics.png"
          height={500}
          width={500}
          alt="Tokenomiqs"
        />
      </div>
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
            isViewingPepper
              ? "left-[50%] rotate-12"
              : "left-[12%] md:left-[28%]"
          )}
          style={{ transitionProperty: "all" }}
          onClick={() => setIsViewingPepper(!isViewingPepper)}
          src="/whitecover.png"
          height={500}
          width={500}
          alt="Tokenomiqs"
        />
      </div>
      <div className="h-full w-full flex items-center justify-center relative mt-20 max-w-[1500px]">
        <Image
          className="relative top-[-50px]"
          src="/rule2.png"
          height={500}
          width={1000}
          alt="$MONKS"
        />
      </div>
      <div
        id="tokenomics"
        className="h-full w-full flex items-center justify-center relative max-w-[1600px] mb-20"
      >
        <Image
          className="cursor-pointer w-[100%] md:w-[50%]"
          src="/footer.png"
          height={500}
          width={500}
          alt="Tokenomiqs"
        />
      </div>

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
