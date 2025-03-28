//import OptionSampleFlag from '../assets/images/usa_flag.jpg'

export default function ImagePanel({loadedImage}) {
    return (
        <div>
        <img
            src={loadedImage}
            alt=""
                className="w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] md:w-[30rem] md:h-[22rem] object-cover rounded-lg shadow-lg"
        />
        </div>
    )
}

