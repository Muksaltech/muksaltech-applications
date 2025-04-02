import GameOptionsCard from '../components/GameOptionsCard';
import OptionSampleFlag from '../assets/images/usa_flag.jpg'
import OptionSampleLogo from '../assets/images/benz_logo.jpg'
import OptionSamplePresidents from '../assets/images/‌lincoln_pres.jpg'
import OptionSampleCelebs from '../assets/images/dwane_celeb.jpg'

import WebpSampleFlag from '../assets/images/usa_flag.webp'
import WebpSampleLogo from '../assets/images/benz_logo.webp'
import WebpSamplePresidents from '../assets/images/_lincoln_pres.webp'
import WebpSampleCelebs from '../assets/images/dwane_celeb.webp'

const OptionCards = [{
    id:1,
    optionImg: OptionSampleFlag,
    webpOptionImg: WebpSampleFlag,
    categoryTxt: "World Flags"
},
    {
    id:2,
    optionImg: OptionSampleLogo,
        webpOptionImg: WebpSampleLogo,
    categoryTxt: "Company Logos"
},
    {
    id:3, 
    optionImg: OptionSamplePresidents,
        webpOptionImg: WebpSamplePresidents,
    categoryTxt: "US Presidents"
},
    {
    id:4,
    optionImg: OptionSampleCelebs,
    webpOptionImg: WebpSampleCelebs,
    categoryTxt: "Famous Celebrities"
},

]; // or real card data


function SelectOptionsPage({ sendIdDataToIdentifyThisContainer }) {
    const getSelectedOptionCardData = (optionCardData) => {
        sendIdDataToIdentifyThisContainer(optionCardData) /// ID
    }


    return (
        <div className="min-h-screen bg-zinc-900 p-4 flex flex-col items-center justify-center">
            <h1 className='text-white sm:text-4xl font-medium tracking-wide mb-12'>Select an option</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {OptionCards.map((OptionCard, index) => (
                    <GameOptionsCard Id={OptionCard.id} key={index} sendSelectedOptionCardData={getSelectedOptionCardData} optionImage={OptionCard.optionImg} webpOptionImg={OptionCard.webpOptionImg } CategoryText={OptionCard.categoryTxt} />
                ))}
            </div>
        </div>
    );
}
export default SelectOptionsPage;
