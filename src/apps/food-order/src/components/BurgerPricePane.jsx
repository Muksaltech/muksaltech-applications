import React, { useState } from 'react';
import BurgerOrderCounterButton from "./BurgerOrderCounterButton";
import BurgerCurrentPriceButton from "./BurgerCurrentPriceButton";

function BurgerPricePane({ sendReviewPageLoadNotification }) {
    const [counterVal, setCounterVal] = useState(1);

    const getCounterValue = (counterVal) => {
        setCounterVal(counterVal)
    }

    const getReviewPageLoadNotification = (pageName) => {
        sendReviewPageLoadNotification(pageName)
    }

    return (
        <div className="mt-10 border-t pt-6 flex items-center justify-between">
            <BurgerOrderCounterButton sendCounterValue={getCounterValue} />
            <BurgerCurrentPriceButton
                currrentPrice={counterVal}
                sendReviewPageLoadNotification={getReviewPageLoadNotification}
            />
        </div>
    );
}

export default BurgerPricePane;







