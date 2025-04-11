export default function BurgerSidesCard({ sidesData , sendSidesCardData}) {
    return (
        <div onClick={() => { sendSidesCardData(sidesData)}} className="flex flex-col items-center cursor-pointer border rounded-lg p-3 hover:shadow-md">
            <img
                src={`/burger/flavor.png`} // your image path here
                alt={sidesData}
                className="w-24 h-24 object-contain mb-2"
            />
            <p className="text-sm text-center font-medium">{sidesData}</p>
        </div>
    );
}
