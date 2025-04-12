import React, { useEffect, useState } from 'react';
import BurgerSidesHeading from "./BurgerSidesHeading";
import BurgerSidesCard from "./BurgerSidesCard"


function BurgerSidesGroup({ sidesData, sendSelectedCard }) {
    const [selectedSideCard, setSelectedSideCard] = useState(null)
    const sideCardsHeading = sidesData.sidesTitle
    const sidesCardData = sidesData.sides

    useEffect(() => { 
        //alert(selectedSideCard)
        //use the return card to filter out the object that 
        //rerender the rest of the remaining burgerSide Data
    
        sendSelectedCard(selectedSideCard);
    }, [selectedSideCard])

    //rather than use a parent method to collect data deliverey,
    //use the Parent setState to as the method. it implicityly receives the delivery of data
    // now state will be delivered in the update useEffect 
    return (
        <>
            <BurgerSidesHeading title={sideCardsHeading} />
            <div className="grid grid-cols-2 md:grid-cols-3 mb-4 gap-4">
                {sidesCardData.map((side, i) => (
                    <BurgerSidesCard sendSidesCardData={setSelectedSideCard} sidesData={side} key={i} />
                ))}
            </div> 
        </>
    );
}

export default BurgerSidesGroup;
