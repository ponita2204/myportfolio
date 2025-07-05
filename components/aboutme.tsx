import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane, FaGithub } from "react-icons/fa";

export default function AboutMeSection() {
  return (
    <section className="mt-24 w-full flex flex-col items-center">
      <h2 className="text-3xl font-bold text-black mb-10 text-center">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 w-full max-w-6xl">
        {/* ID Card */}
        <div className="flex justify-center w-full md:w-1/4">
          <div className="relative flex flex-col items-center w-56 h-[340px] bg-white rounded-xl shadow-xl border-2 border-blue-200 overflow-visible">
            {/* Lanyard */}
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
              <div className="w-1 h-10 bg-gray-300 rounded-full"></div>
              <div className="w-16 h-4 bg-gradient-to-r from-gray-200 to-gray-400 rounded-full rotate-12"></div>
              <div className="w-6 h-2 bg-gray-300 rounded-full mt-[-6px]"></div>
            </div>
            {/* Card Clip */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-100 rounded-b-xl border-b-2 border-gray-300 z-10 flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full mx-1"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full mx-1"></div>
            </div>
            {/* Card Body */}
            <div className="flex flex-col items-center mt-8 px-3 w-full">
              {/* Photo with border */}
              <div className="w-36 h-44 rounded-lg overflow-hidden border-2 border-blue-300 shadow-md bg-gray-100">
                <Image
                  src="/assets/me.jpg"
                  alt="ID Card"
                  width={144}
                  height={176}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Name and Title */}
              <div className="mt-3 text-center">
                <h3 className="text-lg font-bold text-blue-900">Nita Po</h3>
                <p className="text-xs text-gray-500">Web Developer & Designer</p>
              </div>
              {/* Divider */}
              <div className="w-20 border-b-2 border-blue-200 my-2" />
          
            </div>
            {/* Bottom bar */}
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-blue-200 via-pink-200 to-blue-100 flex items-center justify-center rounded-b-xl">
              <span className="text-xs text-blue-700 font-semibold tracking-widest">
                PORTFOLIO
              </span>
            </div>
          </div>
        </div>
        {/* Experience Columns */}
        <div className="flex flex-col md:flex-row gap-10 w-full md:w-2/4">
          {/* Experience 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4">EXPERIENCE</h3>
            <ul className="space-y-3 text-gray-800 text-base">
              <li>
                <span className="font-semibold">
                  Interaction Design Intern at Sanoea Wear
                </span>
                <br />
                <span className="text-gray-500 text-sm">
                  aug 2024 – feb 2025
                </span>
              </li>
              <li>
                <span className="font-semibold">
                  Interaction Design Intern at EYJ Health
                </span>
                <br />
                <span className="text-gray-500 text-sm">
                  june 2024 – aug 2025
                </span>
              </li>
              <li>
                <span className="font-semibold">
                  Graphic Design & Social Media Intern at We The Change
                </span>
                <br />
                <span className="text-gray-500 text-sm">
                  june 2023 – aug 2023
                </span>
              </li>
              <li>
                <span className="font-semibold">Freelance Designer</span>
                <br />
                <span className="text-gray-500 text-sm">2023 – PRESENT</span>
              </li>
            </ul>
          </div>
          {/* Experience 2 */}
          {/* <div>
            <h3 className="text-xl font-bold mb-4 invisible md:visible">
              EXPERIENCE
            </h3>
            <ul className="space-y-3 text-gray-800 text-base">
              <li>
                <span className="font-semibold">
                  Secretary Disipline Committe, SOD
                </span>
                <br />
                <span className="text-gray-500 text-sm">
                  discipline committe, upes dehradun
                </span>
              </li>
              <li>
                <span className="font-semibold">
                  Student Ambassador at UPES
                </span>
                <br />
                <span className="text-gray-500 text-sm">
                  student ambassador · upes dehradun
                </span>
              </li>
              <li>
                <span className="font-semibold">
                  Event Head Kaiakulture, Club UPES
                </span>
                <br />
                <span className="text-gray-500 text-sm">
                  kaiakulture club, upes dehradun
                </span>
              </li>
              <li>
                <span className="font-semibold">
                  Registration Team at India HCI 2023
                </span>
                <br />
                <span className="text-gray-500 text-sm">
                  hci india · 2023 upes dehradun
                </span>
              </li>
            </ul>
          </div> */}
        </div>
        {/* Contact & Software */}
        <div className="flex flex-col gap-8 w-full md:w-1/4">
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">CONTACT</h3>
            <ul className="space-y-3 text-base">
              <li className="flex items-center gap-2">
                <MdEmail size={20} />
                <span className="break-all">nitapo2204@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaTelegramPlane size={20} />
                <a
                  href="https://t.me/niii__taaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline break-all"
                >
                  https://t.me/yourtelegramusername
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaGithub size={20} />
                <a
                  href="https://github.com/ponita2204
"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline break-all"
                >
                  https://github.com/ponita2204

                </a>
              </li>
            </ul>
          </div>
          {/* Softwares */}
          <div>
            <h3 className="text-xl font-bold mb-4">SOFTWARES</h3>
            <div className="flex gap-3">
              <Image
                src="/icons/ps.svg"
                alt="Photoshop"
                width={28}
                height={28}
              />
              <Image
                src="/icons/sketch.svg"
                alt="Sketch"
                width={28}
                height={28}
              />
              <Image src="/icons/xd.svg" alt="XD" width={28} height={28} />
              <Image
                src="/icons/ai.svg"
                alt="Illustrator"
                width={28}
                height={28}
              />
              <Image
                src="/icons/id.svg"
                alt="InDesign"
                width={28}
                height={28}
              />
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}