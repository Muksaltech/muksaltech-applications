import React, { useEffect, useState } from 'react';
import BurgerSidesHeading from "./BurgerSidesHeading";
import BurgerImagePanel from "./BurgerImagePanel";
import BurgerPricePane from "./BurgerPricePane";
import BurgerSidesCard from "./BurgerSidesCard";
import BurgerSidesGroup from "./BurgerSidesGroup";
import SidesDataJson from '../../SidesData.json';
import BurgerSelections from './BurgerSelections';

export default function BurgerOrderPage({ burgerSidesData, goBack }) {
   
    const [unFilteredData, setUnfilteredData] = useState(SidesDataJson)
    const [selectedSideCard, setSelectedSideCard] = useState(null)

    const [selectedSideCardName, setSelectedSideCardName] = useState(null)

    const [filteredData, setFilteredData] = useState(SidesDataJson)
        useEffect(() => { 
           // alert(selectedSideCard)
            //use the return card to filter out the object that 
            //rerender the rest of the remaining burgerSide Data
            setFilteredData(filteredData.filter(item => !item.sides.includes(selectedSideCard)))

            setSelectedSideCardName(selectedSideCard)
        }, [selectedSideCard])
    return (
        <div className="min-h-screen p-6 md:p-12">
            <div className="flex flex-col md:flex-row gap-10">
             
                {/* <BurgerImagePanel */}
                 <BurgerImagePanel />
                <div className="flex-1">
                    <BurgerSelections selectedItem={selectedSideCardName} />
                    {/* <BurgerSideHeading */}
                    {filteredData.map((side, i) => (
                        <BurgerSidesGroup key={i} sidesData={side} sendSelectedCard={setSelectedSideCard} />
                    ))}
            
                </div>
                
            </div>

            {/* Footer: Add to Bag */}
            <BurgerPricePane />
        </div>
    );
}
