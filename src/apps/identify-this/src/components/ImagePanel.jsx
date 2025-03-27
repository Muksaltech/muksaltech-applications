//import OptionSampleFlag from '../assets/images/usa_flag.jpg'

export default function ImagePanel({loadedImage}) {
    return (
    <>
        <img
            src={loadedImage}
            alt=""
                className="w-100 h-96 object-cover rounded-lg shadow-lg"
        />
        </>
    )
}

