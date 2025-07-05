import Image from "next/image";

export default function EducationSection() {
  return (
    <div className="mt-16 w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold text-black mb-6 text-center">
        EDUCATION
      </h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center">
        {/* Phnom Kong Primary School */}
        <div className="bg-white rounded-xl shadow-md p-6 flex-1 min-w-[250px] flex flex-col items-center">
          <Image
            src="/assets/edu.svg"
            alt="Phnom Kong Primary School"
            width={48}
            height={48}
            className="mb-3"
          />
          <h4 className="font-semibold text-lg mb-1 text-center">
            Phnom Kong Primary School
          </h4>
          
          <div className="text-gray-500 text-sm mb-2 text-center">2009 – 2015</div>
          
        </div>
        {/* Mebon Secondary School */}
        <div className="bg-white rounded-xl shadow-md p-6 flex-1 min-w-[250px] flex flex-col items-center">
          <Image
            src="/assets/edu.svg"
            alt="Mebon Secondary School"
            width={48}
            height={48}
            className="mb-3"
          />
          <h4 className="font-semibold text-lg mb-1 text-center">
            Mebon Secondary School
          </h4>
         
          <div className="text-gray-500 text-sm mb-2 text-center">2015 – 2018</div>
          
        </div>
        {/* Hun Sen Svay Actor High School */}
        <div className="bg-white rounded-xl shadow-md p-6 flex-1 min-w-[250px] flex flex-col items-center">
          <Image
            src="/assets/edu.svg"
            alt="Hun Sen Svay Actor High School"
            width={48}
            height={48}
            className="mb-3"
          />
          <h4 className="font-semibold text-lg mb-1 text-center">
            Hun Sen Svay Actor High School
          </h4>
          <div className="text-gray-500 text-sm mb-2 text-center">2018 – 2021</div>
        </div>  
        {/* Royal University Of Phnom Penh */}
        <div className="bg-white rounded-xl shadow-md p-6 flex-1 min-w-[250px] flex flex-col items-center">
          <Image
            src="/assets/rupp-logo.png"
            alt="Royal University Of Phnom Penh"
            width={48}
            height={48}
            className="mb-3"
          />
          <h4 className="font-semibold text-lg mb-1 text-center">
            Bachelor Degree of Computer Science<br />at Royal University Of Phnom Penh
          </h4>
           <div className="text-gray-500 text-sm mb-2 text-center">2021 – 2025</div>
          
        </div>
      </div>
    </div>
  );
}