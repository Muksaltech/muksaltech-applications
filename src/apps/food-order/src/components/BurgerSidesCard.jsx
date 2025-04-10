export default function BurgerSidesCard({side}) {
    return (
        <div className="flex flex-col items-center cursor-pointer border rounded-lg p-3 hover:shadow-md">
            <img
                src={`/pancakes/flavor.png`} // your image path here
                alt={side}
                className="w-24 h-24 object-contain mb-2"
            />
            <p className="text-sm text-center font-medium">{side}</p>
        </div>
    );
}
