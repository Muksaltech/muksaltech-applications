import React, { useEffect, useState } from 'react';
import BurgerSidesHeading from "./BurgerSidesHeading";
import BurgerImagePanel from "./BurgerImagePanel";
import BurgerPricePane from "./BurgerPricePane";
import BurgerSidesCard from "./BurgerSidesCard";
import BurgerSidesGroup from "./BurgerSidesGroup";
import SidesDataJson from '../../SidesData.json';
import BurgerSelections from './BurgerSelections';

export default function BurgerOrderPage({ burgerSidesData, backToBurgerListPage, burgerName, burgerDescription, sendReviewPageLoadNotification }) {
    const [unFilteredData, setUnfilteredData] = useState(SidesDataJson)
    const [selectedSideCard, setSelectedSideCard] = useState(null)
    const [selectedSideCardName, setSelectedSideCardName] = useState(null)
    const [filteredData, setFilteredData] = useState(SidesDataJson)
    const [loadReviewPage, setLoadReviewPage] = useState(false)


    useEffect(() => { 
            //alert(selectedSideCard)
            //use the return card name to filter out the object that the card belongs to 
            //rerender the rest of the remaining burgerSide Data

            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
 
    }, [])

    const scrollToTopPage = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    
    //this method gets the name of the selected data card and uses it
    //to filter the json object - when 1 is filtered out of 3 burgergroups
    //then 2 is remaining for example - iys only the 2 that are mapped in this case
    const getSelectedDataCard = (selectedDataCardforAddition) => {
        //decreases burger group
        setFilteredData(filteredData.filter(item => !item.sides.includes(selectedDataCardforAddition)))

        //increases selections
        setSelectedSideCardName({"selected": selectedDataCardforAddition, "add": "add"} ) // name of a side card asigned to setSelectedSideCardName with "add" keyword so that it stacks on selections array is <Selections
        scrollToTopPage();
   
    }


    //decreases selection and increases burger group panel
    const getSideNameToremoveSelectedItem = (selectedDataCardForRemoval) => {
        //alert(selectedDataCardForRemoval)
        
        //filter only one object
        const burgerGroupToStack = SidesDataJson.filter(item => item.sides.includes(selectedDataCardForRemoval))
       
        //decreases selections
        setSelectedSideCardName({ "selected": selectedDataCardForRemoval, "remove": "remove" }) // name of a side card asigned to setSelectedSideCardName with "add" keyword so that it stacks on selections array is <Selections
        
        //increase burgergroup
        setFilteredData(prev => [...prev, ...burgerGroupToStack])
        scrollToTopPage();
    }

    const getReviewPageLoadNotification = (pageName) => {
        sendReviewPageLoadNotification(pageName);
    }

    return (
        <div className="min-h-screen p-4 md:p-10">
            <p className='m-0 cursor-pointer hover:text-white' onClick={() => { backToBurgerListPage()}}> &lt;&lt; Back</p>
            <div className="flex flex-col md:flex-row gap-10">  
                
                {/* <BurgerImagePanel */}
                <BurgerImagePanel burgerName={burgerName} burgerDescription={burgerDescription} />
                 <div className="flex-1">
                    {selectedSideCardName && (
                        <BurgerSelections sendSideNameToBeRemoved={getSideNameToremoveSelectedItem} selectedItem={selectedSideCardName} />
                    )}
                    {/* <BurgerGroup stacking Logic */}
                    {filteredData.map((side, i) => (
                        <BurgerSidesGroup key={i} sidesData={side} sendSelectedCard={getSelectedDataCard} />
                    ))}
                </div>   
            </div>

            {/* Footer: Add to Bag */}
            <BurgerPricePane sendReviewPageLoadNotification={getReviewPageLoadNotification} />
        </div>
    );
}
