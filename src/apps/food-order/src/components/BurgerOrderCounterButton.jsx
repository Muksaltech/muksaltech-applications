import React, { useState } from 'react';

function BurgerOrderCounterButton({ sendCounterValue }) {
    const [orderNumber, setOrderNumber] = useState(1);
    const incrementOrder = () => {
        const newOrder = orderNumber + 1;
        setOrderNumber(newOrder);
        sendCounterValue(newOrder);
    };

    const decrementOrder = () => {
        if (orderNumber > 1) {
            const newOrder = orderNumber - 1;
            setOrderNumber(newOrder);
            sendCounterValue(newOrder);
        }
    };

    return (
         <div className="flex items-center space-x-4">
                <button
                    onClick={decrementOrder}
                    disabled={orderNumber === 1}
                    className="bg-blue-600 hover:bg-blue-700 px-3 py-1 text-white rounded">−</button>
                <span className="font-medium text-lg">{orderNumber}</span>
            <button onClick={incrementOrder} className="bg-blue-600 hover:bg-blue-700 px-3 py-1 text-white rounded">+</button>
        </div>
    );
}

export default BurgerOrderCounterButton;
