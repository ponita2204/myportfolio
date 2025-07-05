import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mt-24 w-full flex flex-col items-center">
      {/* Large "CONTENT" background text with numbers */}
      <div className="relative w-full max-w-6xl mb-10">
        <h2 className="text-[5rem] md:text-[7rem] font-black leading-none tracking-tight text-[#ede5db] text-center select-none opacity-70">
          CONTENT
        </h2>
        {/* Numbers overlay */}
        <div className="absolute inset-0 flex justify-between items-start px-6 md:px-12 pointer-events-none">
          {["01", "02", "03", "04", "05"].map((num, i) => (
            <span
              key={num}
              className="text-[#d6c7b2] font-bold text-3xl md:text-5xl"
              style={{ marginTop: i % 2 === 0 ? 0 : 24 }}
            >
              {num}
            </span>
          ))}
        </div>
      </div>
      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-6xl">
        {/* Project 1 */}
        <div className="flex flex-col items-center bg-[#6e9fe6] rounded-2xl p-6 relative min-h-[420px]">
          <Image
            src="/projects/travlo.png"
            alt="Travlo"
            width={120}
            height={220}
            className="mb-6 drop-shadow-lg"
          />
          <span className="absolute bottom-6 left-6 text-white text-[6rem] font-black opacity-20 select-none pointer-events-none">
            1
          </span>
          <div className="mt-auto">
            <h3 className="font-bold text-white text-lg">TRAVLO</h3>
            <p className="text-white text-sm">
              Accessible Travel for people with special needs
            </p>
          </div>
        </div>
        {/* Project 2 */}
        <div className="flex flex-col items-center bg-[#ded3be] rounded-2xl p-6 relative min-h-[420px]">
          <Image
            src="/projects/sanora.png"
            alt="Sanora"
            width={140}
            height={180}
            className="mb-6 drop-shadow-lg"
          />
          <span className="absolute bottom-6 left-6 text-white text-[6rem] font-black opacity-20 select-none pointer-events-none">
            2
          </span>
          <div className="mt-auto">
            <h3 className="font-bold text-[#5a4e3c] text-lg">SANORA</h3>
            <p className="text-[#5a4e3c] text-sm">
              Website Design for a premium safety wear brand
            </p>
          </div>
        </div>
        {/* Project 3 */}
        <div className="flex flex-col items-center bg-[#cfe2c3] rounded-2xl p-6 relative min-h-[420px]">
          <Image
            src="/projects/factoryflow.png"
            alt="Factory Flow"
            width={140}
            height={140}
            className="mb-6 drop-shadow-lg"
          />
          <span className="absolute bottom-6 left-6 text-white text-[6rem] font-black opacity-20 select-none pointer-events-none">
            3
          </span>
          <div className="mt-auto">
            <h3 className="font-bold text-[#3d4d2c] text-lg">FACTORY FLOW</h3>
            <p className="text-[#3d4d2c] text-sm">
              Factory Management System
            </p>
          </div>
        </div>
        {/* Project 4 */}
        <div className="flex flex-col items-center bg-[#f26d6d] rounded-2xl p-6 relative min-h-[420px]">
          <Image
            src="/projects/agoda.png"
            alt="Agoda"
            width={140}
            height={120}
            className="mb-6 drop-shadow-lg"
          />
          <span className="absolute bottom-6 left-6 text-white text-[6rem] font-black opacity-20 select-none pointer-events-none">
            4
          </span>
          <div className="mt-auto">
            <h3 className="font-bold text-white text-lg">AGODA</h3>
            <p className="text-white text-sm">
              Re-design for the AGODA Website
            </p>
          </div>
        </div>
        {/* Project 5 */}
        <div className="flex flex-col items-center bg-[#7fa6e6] rounded-2xl p-6 relative min-h-[420px]">
          <Image
            src="/projects/balancify.png"
            alt="Balancify"
            width={120}
            height={220}
            className="mb-6 drop-shadow-lg"
          />
          <span className="absolute bottom-6 left-6 text-white text-[6rem] font-black opacity-20 select-none pointer-events-none">
            5
          </span>
          <div className="mt-auto">
            <h3 className="font-bold text-white text-lg">BALANCIFY</h3>
            <p className="text-white text-sm">
              Work-life balance, simplified and smart
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}