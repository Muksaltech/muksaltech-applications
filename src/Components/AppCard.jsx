//import { MdArrowForwardIos } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";

export default function AppCard({ title, description, tech, isAppReady, appPath }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return <section className="flex flex-row w-full mx-auto my-4 p-2 sm:p-6 md:p-6 border-b border-gray-300 font-maseratti max-w-6xl">
      <div className="flex justify-end items-start pr-4">
        <div onClick={() => setIsDrawerOpen(true)} className="text-[0.75rem] text-gray-300 cursor-pointer"><GiHamburgerMenu /></div>
      </div>
      <div className="w-full">
    <h2 className="text-2xl font-bold text-gray-300 mb-1">{title}</h2>
    <p className="text-1xl font-semibold text-gray-100 mb-1">
      {description}
    </p> 
    <p className="text-[0.85rem] mb-4 text-gray-400">
      Tech Stack : {tech}
        </p>
     
    <div className="flex justify-end gap-4 sm:gap-6 text-[0.85rem]  text-gray-400">
          <a href={appPath} className={`whitespace-nowrap ${isAppReady ? "underline hover:text-white text-gray-400" : "text-gray-600 cursor-not-allowed pointer-events-none"}`}>launch</a>
          <a
            href="https://github.com/Muksaltech/muksaltech-applications"
            target="_blank"
            rel="noopener noreferrer"
            className={`whitespace-nowrap ${isAppReady
                ? "underline hover:text-white text-gray-400"
                : "text-gray-600 cursor-not-allowed pointer-events-none"
              }`}
          >
            obtain code
          </a>
          <span className="whitespace-nowrap no-underline font-bold text-green-400">{isAppReady ? "MVP Ready" : <span className="text-orange-400">WIP</span>}</span>
    </div>
    </div>
 
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-start">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setIsDrawerOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-80 h-full bg-gray-900 p-6 shadow-lg z-50">
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="absolute top-4 right-4 text-gray-300 text-xl"
            >
              <MdOutlineCancel />
            </button>
            <h3 className="text-gray-300 text-xl font-semibold mt-4">{title} - More Info</h3>
            <p className="text-gray-300">
              TODO- Fill later
            </p>
          </div>
        </div>
      )}
  </section>
  
  }
  
  