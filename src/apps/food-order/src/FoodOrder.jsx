import { useEffect, useState } from 'react';
import BurgerList from './components/BurgerList';
import Spinner from '../../../Components/Spinner';
import './FoodOrder.css';

function FoodOrder() {
  const getBurgersDataFromAzureCloud =
    'https://muksalfoodorder-g7htfpcpdvccdaec.canadacentral-01.azurewebsites.net/api/burgers';

  const [burgersData, setBurgersData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBurgers = async () => {
      try {
        const response = await fetch(getBurgersDataFromAzureCloud);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBurgersData(data);
      } catch (error) {
        console.error('Error fetching burgers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBurgers();
  }, []);

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Muksal Fictitious Burger Joint</h2>
      <p className="text-center mb-8 text-gray-400 max-w-xl mx-auto">
        Discover The Latest Flavors At Muksal! No Matter What Time Of Day, Our Amazing Burgers Are Here To Satisfy Any Craving.
      </p>

      {loading ? (
        <div className="flex justify-center mt-28">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {burgersData.map((burgerData) => (
            <BurgerList key={burgerData.burgerId} burgerData={burgerData} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FoodOrder;
