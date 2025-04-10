
function BurgerList({ burgerData }) {
    const BurgerImageCloudUrl = `https://raw.githubusercontent.com/Muksaltech/food-order-image-storage/refs/heads/muksal-main/${burgerData.imageUrlIndicator}.webp`
    return (
        <>
            <div className="text-center cursor-pointer shadow">
                <img src={BurgerImageCloudUrl} alt={burgerData.name} className="w-full h-auto mx-auto" />
            </div>
        </>
    );
}

export default BurgerList;

