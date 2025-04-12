import { useEffect, useState } from 'react';
import BurgerList from './components/BurgerList';
import Spinner from '../../../Components/Spinner';
import BurgerOrderPage from './components/BurgerOrderPage'; // import your new page
import './FoodOrder.css';
import BurgerData from '../public/BurgerData.json'

function FoodOrder() {
  //const getBurgersDataFromAzureCloud =
    //'https://muksalfoodorder-g7htfpcpdvccdaec.canadacentral-01.azurewebsites.net/api/burgers';

  const [burgersData, setBurgersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isBurgerSelected, SetIsBurgerSelected] = useState(false); // store full burger object
  const [burgerSidesData, SetBurgerSidesData] = useState([{}]); // store full burger sides data

  useEffect(() => {
  //  const fetchBurgers = async () => {
      //try {
       // const response = await fetch(getBurgersDataFromAzureCloud);
       // if (!response.ok) {
        //  throw new Error('Network response was not ok');
       // }
        const data = BurgerData
          //await response.json();
        // console.log(data);
        setBurgersData(data);

        //console.log(data);

    ////  } catch (error) {
       // console.error('Error fetching burgers:', error);
     // } finally {
       // setLoading(false);
     // }
   // };

    //fetchBurgers();
  }, []);

  const getSelectedBurgerId = (burgerDataId) => { 
    //SetBurgerSidesData use this when the data returns
    //use this to call Fries, Sauce and Drinks data for <Burger page
    //set selectedBurger to true to show the BurgerOrderPage
    SetIsBurgerSelected(true)
  }

  return (
    <div >
      {loading ? (
        <div className="flex justify-center mt-28">
          <Spinner />
        </div>
      ) : isBurgerSelected ? (
          <BurgerOrderPage burgerSidesData={burgerSidesData} goBack={() => SetIsBurgerSelected(false)} />
        ) : (
            <div className="px-4 py-8">  
              <h2 className="text-2xl font-semibold text-center mb-6">Muksal Fictitious Burger Joint</h2>
              <p className="text-center mb-8 text-gray-400 max-w-xl mx-auto">
                Discover The Latest Flavors At Muksal! No Matter What Time Of Day, Our Amazing Burgers Are Here To Satisfy Any Craving.
              </p>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {burgersData.map((burgerData) => (
            <BurgerList
              key={burgerData.burgerId}
              burgerData={burgerData}
              sendSelectedBurgerId={getSelectedBurgerId}
              //onSelect={() => setSelectedBurger(burgerData)}
            />
          ))}
              </div>
            </div> 
      )}
    </div>
  );
}

export default FoodOrder;
