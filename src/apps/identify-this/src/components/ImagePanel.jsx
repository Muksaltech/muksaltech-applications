//import OptionSampleFlag from '../assets/images/usa_flag.jpg'

export default function ImagePanel({loadedImage}) {
    return (
    <>
        <img
            src={loadedImage}
            alt=""
            className="w-[30rem] w-[30rem] object-cover rounded-lg shadow-lg"
        />
        </>
    )
}

