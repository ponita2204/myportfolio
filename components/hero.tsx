import Image from "next/image";

export default function HeroSection() {
  return (
    <section >
      {/* Hero Section */}
      <div className="relative flex flex-col items-center">
        {/* Portfolio Title */}
        <h1 className="text-[5rem] md:text-[7rem] font-black leading-none tracking-tight text-black text-center relative">
          <span className="inline">Portfolio</span>
          <span className="absolute top-4 right-[-3rem] text-4xl font-bold text-[#d6c7b2]">
            '21
          </span>
        </h1>
        {/* Subtitle */}
        <span className="mt-2 text-lg font-semibold text-[#d6c7b2] tracking-wide">
          PO NITA
        </span>
        {/* Illustration */}
        <div className="mt-4">
          <Image
            src="/assets/me.jpg"
            alt="Portfolio Illustration"
            width={400}
            height={400}
            priority
            className="rounded-xl"
          />
        </div>
        {/* Description */}
        <p className="mt-6 max-w-xl text-center text-gray-700 text-lg">
          Hi. I'm Nita, a Website developer and designer dedicated to crafting
          engaging digital experiences. Welcome to my portfolio!
        </p>
      </div>
    </section>
  );
}