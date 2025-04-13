import React, { useEffect, useState, useRef } from 'react';

export default function BurgerSelections({ selectedItem, sendSideNameToBeRemoved }) {
    const [selections, setSelections] = useState([]);

    //let selections = [];

    useEffect(() => {
        const updateSelections = () => {
           // if (selectedItem !== null) {
             //determine if we are removing or adding
             //if adding,
             // field present?
            if (selectedItem.hasOwnProperty('add') && selectedItem.selected !== null ) {
                   // add to selections
                   setSelections(prev => [...prev, selectedItem.selected]) // stack the next selection
            } else {  
                    //if removing - filter out the incoming name from selections array
                    //selections.filter
                //remove from selections
                const reduceSelections = selections.filter(item => item !== selectedItem.selected)
                setSelections(reduceSelections) // remove the next selection from stack
               
                }
          //  }    
        }  
        updateSelections();
       // console.log(selections)
    }, [selectedItem])
   
    return (
        <div className="max-w-2xl mx-auto p-6 pl-0">
            {selections.length > 0 && (
                <h2 className="text-xl font-semibold text-gray-400 border-b pb-2 mb-4">
                    Your Burger Sides Selection
                </h2>
            )}
            <div className="space-y-6">
                {selections.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <img src="/xxx/xxx" alt={item} className="w-24 h-24 border rounded-lg border-gray-300 object-contain" />
                        <div>
                            <p className="font-semibold text-lg">{item}</p>
                        
                            <p className="text-sm text-gray-600">Adds 200 cals</p>
                            <button onClick={() => { sendSideNameToBeRemoved(item) } } className="mt-1 text-red-600 text-sm flex items-center gap-1 hover:underline">
                                <span>✖</span> Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
