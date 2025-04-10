
function BurgerPricePane() {
    return (
        
            <div className="mt-10 border-t pt-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <button className="bg-gray-100 px-3 py-1 rounded">−</button>
                    <span className="font-medium text-lg">1</span>
                    <button className="bg-gray-100 px-3 py-1 rounded">+</button>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
                    $12.29 | Add to Bag
                </button>
            </div>
    
    );
}

export default BurgerPricePane;







