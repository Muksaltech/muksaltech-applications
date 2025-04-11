import React from 'react';
const selections = [
    {
        title: "Honey Mustard",
        calories: "330 Cals",
        image: "/images.png"
       
    },
    {
        title: "Fire Fizz",
        calories: "200 Cals",
        image: "/images.png"
       
    },
    {
        title: "Crinckle Cut",
        calories: "210 Cals",
        image: "/images.png"
      
    },

];

export default function BurgerSelections() {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <h2 className="text-xl font-semibold text-gray-400 border-b pb-2 mb-4">Your Selections</h2>
            <div className="space-y-6">
                {selections.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <img src={item.image} alt={item.title} className="w-24 h-24 border rounded-lg border-gray-300 object-contain" />
                        <div>
                            <p className="font-semibold text-lg">{item.title}</p>
                            {item.extra && <p className="text-sm text-gray-600">{item.extra}</p>}
                            <p className="text-sm text-gray-600">Adds {item.calories}</p>
                            <button className="mt-1 text-red-600 text-sm flex items-center gap-1 hover:underline">
                                <span>✖</span> Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
