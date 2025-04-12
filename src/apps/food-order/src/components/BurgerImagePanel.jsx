
export default function BurgerImagePanel({ burgerName, burgerDescription }) {
    return (
        <div className="flex-1">
            <h2 className="text-4xl font-bold my-4">Your Order</h2>
            <img
                src="/burger-combo.png" // replace with actual image
                alt="Selected Burger"
                className="rounded-xl mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{burgerName}</h3>
            <p className="text-orange-600 font-semibold text-xl mb-2">$12.29</p>
            <p className="text-gray-300">
                {burgerDescription}
            </p>
        </div>
    );
}






