import GameOptionsCard from '../components/GameOptionsCard';
import OptionSampleFlag from '../assets/images/usa_flag.jpg'
import OptionSampleLogo from '../assets/images/benz_logo.jpg'
import OptionSamplePresidents from '../assets/images/‌lincoln_pres.jpg'
import OptionSampleCelebs from '../assets/images/dwane_celeb.jpg'


const OptionCards = [{
    optionImg: OptionSampleFlag,
    categoryTxt: "World Flags"
},
{
    optionImg: OptionSampleLogo,
    categoryTxt: "Company Logos"
},
{
    optionImg: OptionSamplePresidents,
    categoryTxt: "US Presidents"
},
{
    optionImg: OptionSampleCelebs,
    categoryTxt: "Famous Celebrities"
},

]; // or real card data

function SelectOptionsPage() {
    return (
        <div className="min-h-screen bg-zinc-900 p-4 flex flex-col items-center justify-center">
            <h1 className='text-white sm:text-4xl font-medium tracking-wide mb-12'>SELECT AN OPTION</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {OptionCards.map((OptionCard, index) => (
                    <GameOptionsCard key={index} optionImage={OptionCard.optionImg} CategoryText={OptionCard.categoryTxt} />
                ))}
            </div>
        </div>
    );
}
export default SelectOptionsPage;
