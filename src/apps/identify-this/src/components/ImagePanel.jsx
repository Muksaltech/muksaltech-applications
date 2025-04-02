//import OptionSampleFlag from '../assets/images/usa_flag.jpg'

export default function ImagePanel({ loadedFallBackImage , loadedImage}) {
    return (
        <div className="overflow-hidden">
            <picture >
                <source srcSet={loadedImage} type="image/webp" />
                <img
                    src={loadedFallBackImage}
                    alt=""
                    loading="lazy"
                    className="w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] md:w-[30rem] md:h-[20rem] object-contain rounded-lg shadow-lg"
                />
            </picture>
        </div>
    )
}

