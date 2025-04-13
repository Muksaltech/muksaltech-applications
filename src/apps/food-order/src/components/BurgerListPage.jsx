

//require("./assets/images/world_flags/uk_flag.webp")

function BurgerList({ burgerData, sendSelectedBurgerName, sendBurgerDescription }) {
    const BurgerImageCloudUrl = require(`../assets/${ burgerData.imageUrlIndicator }.webp`);
    return (
        <>
            <div onClick={() => { sendSelectedBurgerName(burgerData.name); sendBurgerDescription(burgerData.description) }} className="text-center cursor-pointer shadow">
                <img src={BurgerImageCloudUrl} alt={burgerData.name} className="w-full h-auto mx-auto" />
            </div>
        </>
    );
}

export default BurgerList;

