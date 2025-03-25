//import OptionSampleFlag from '../assets/images/usa_flag.jpg'

export default function GameOptionsCard({optionImage, CategoryText}) {
    return <div className="">
      <div className="relative w-72 h-[460px] rounded-lg overflow-hidden shadow-lg transition-transform duration-100 transform hover:scale-105 cursor-pointer hover:shadow-xl">
  {/* Background Image */}
  <img
    src={optionImage}
    alt=""
    className="w-full h-full object-cover"
  />
{/* Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 text-sm text-white sm:text-base font-medium tracking-wide">
    <p className="mb-2">
      {CategoryText}
    </p>

  </div>
</div>

  </div>
  
  }
  
  