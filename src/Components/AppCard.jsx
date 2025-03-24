import { MdArrowForwardIos } from "react-icons/md";


export default function AppCard() {
    return <div className="flex flex-row w-full mx-auto my-4 p-2 sm:p-6 md:p-6 border-b border-gray-300 font-maseratti max-w-6xl">
    <div className="w-full">
    <h2 className="text-2xl font-bold text-gray-600">Indentify This</h2>
    <p className="text-1xl font-semibold text-gray-500">
      A trivial app where you are rewarded for identifying images and logos
    </p> 
    <p className="text-[0.85rem] mb-4 text-gray-500">
      Tech Stack : Next.js, React.js, Tailwind, Javascript
    </p>
  
    <div className="flex justify-end gap-6 text-[0.85rem] underline text-gray-500">
      <a href="#" className="hover:text-gray-800 whitespace-nowrap">preview</a>
      <a href="#" className="hover:text-gray-800 whitespace-nowrap">launch</a>
      <a href="#" className="hover:text-gray-800 whitespace-nowrap">download code</a>
    </div>
    </div>


    <div className="flex justify-end items-center pl-4">
    <div className="text-2xl text-gray-300"><MdArrowForwardIos /></div>
    </div>
  </div>
  
  }
  
  