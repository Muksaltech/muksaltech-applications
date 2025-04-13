import React, { useState } from 'react';


function BurgerCurrentPriceButton({ currrentPrice, sendReviewPageLoadNotification }) {
    //alert(currrentPrice)
    const loadTReviewPage = (pageName) => {
        sendReviewPageLoadNotification(pageName)
    }

    return (
        <>
            <button onClick={()=>{loadTReviewPage('reviewPage')}} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
                ${(12.29 * Number(currrentPrice)).toFixed(2)} | Add to Bag
            </button>
        </>
     )
}

export default BurgerCurrentPriceButton;
