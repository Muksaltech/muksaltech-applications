import React from 'react';

const BurgerReviewPanel = () => {
    return (
        <div className="p-6 max-w-3xl mx-auto">
            {/* Header */}
            <h1 className="text-3xl font-semibold text-center mb-4">Your Order</h1>

            {/* Hero Image */}
            <div className="flex justify-center mb-2">
                <img
                    src=""
                    alt="Selected Burger"
                    className="w-64"
                />
            </div>
            <p className="text-center text-blue-700 font-medium text-sm">Fire Bite</p>

            {/* My Bag Header */}
            <div className="mt-10 pt-6">
                <div className="flex justify-between items-center border-b pb-2 mb-4">
                    <h2 className="text-xl font-semibold text-gray-300">Your Sides</h2>
                    <h2 className="text-xl font-semibold text-gray-300">Your Details</h2>
                </div>

                {/* Order Items */}
                <div className="space-y-6 w-1/2">
                    {/* Item 1 */}
                    <div className="flex items-start justify-between border rounded-lg p-4 shadow-sm">
                        <div className="flex gap-4">
                            <img
                                src=""
                                alt="Drinks"
                                className="w-16 h-16 rounded"
                            />
                            <div>
                                <p className="font-semibold">Your Drink</p>
                            </div>
                        </div>
                  
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-start justify-between border rounded-lg p-4 shadow-sm">
                        <div className="flex gap-4">
                            <img
                                src=""
                                alt="Fries"
                                className="w-16 h-16 rounded"
                            />
                            <div>
                                <p className="font-semibold">Your Fries</p>
                     

                            </div>
                        </div>
                 
                    </div>
                    {/* Item 2 */}
                    <div className="flex items-start justify-between border rounded-lg p-4 shadow-sm">
                        <div className="flex gap-4">
                            <img
                                src=""
                                alt="Sauce"
                                className="w-16 h-16 rounded"
                            />
                            <div>
                                <p className="font-semibold">Your Sauce</p>


                            </div>
                        </div>

                    </div>
                    <div className="flex justify-end">
                    <button className="bg-blue-600  hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
                        Order
                        </button>
                    </div>
                </div>

            </div>

            
        </div>
    );
};

export default BurgerReviewPanel;
