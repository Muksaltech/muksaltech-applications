import BurgerSidesHeading from "./BurgerSidesHeading";
import BurgerImagePanel from "./BurgerImagePanel";
import BurgerPricePane from "./BurgerPricePane";
import BurgerSidesCard from "./BurgerSidesCard";

export default function BurgerOrderPage({ burgerSidesData, goBack }) {
    return (
        <div className="min-h-screen p-6 md:p-12">
            <div className="flex flex-col md:flex-row gap-10">
                {/* <BurgerImagePanel */}
                 <BurgerImagePanel />

                {/* Right Column: Pancake Flavors */}
                <div className="flex-1">
                    {/* <BurgerSideHeading */}
                    <BurgerSidesHeading title="Choose Your Sauce" />
                    <hr className="text-gray-300 mt-2"></hr>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            "Smoky Chipotle", "Garlic Aioli", "Honey Mustard",
                            "Spicy Mango", "Creamy Jalapeño", "Maple BBQ",
                            "Zesty Ranch", "Buffalo Blaze", "Sweet Chili Twist"
                        ].map((side, i) => (
                            <BurgerSidesCard side={side} key={i} />
                        ))}
                    </div>
                    {/* <BurgerSideHeading */}
                    <BurgerSidesHeading title="Choose Your Drink" />
                    <hr className="text-gray-300 mt-2"></hr>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            "FireFizz Cola", "Mango Blast Soda", "Arctic Lime Spark",
                            "ChocoChill Shake", "Blueberry Breeze", "Pineapple Storm",
                            "Caramel Thunder", "Vanilla Frostbite", "Citrus Inferno"
                        ].map((side, i) => (
                            <BurgerSidesCard side={side} key={i} />
                        ))}
                    </div>
              
                    {/* <BurgerSideHeading */}
                    <BurgerSidesHeading title="Choose Your Fries" />
                    <hr className="text-gray-300 mt-2"></hr>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            "Classic Shoestring", "Sweet Potato Curly", "Cajun Waffle",
                            "Garlic Parmesan", "Crinkle Cut", "Spicy Steakhouse"
                         
                        ].map((side, i) => (
                            <BurgerSidesCard side={side} key={i} />
                        ))}
                    </div>

                </div>
                
            </div>

            {/* Footer: Add to Bag */}
            <BurgerPricePane />
          
        </div>
    );
}
