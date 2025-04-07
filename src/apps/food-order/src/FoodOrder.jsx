import logo from './logo.svg';
import './FoodOrder.css';
import BurgerList from './components/BurgerList';

import FireBite from '../src/assets/firebite.jpg'
import { useEffect , useState} from 'react';

function FoodOrder() {

  const getBurgersData = `http://localhost:8080/api/burgers`;
  const [burgersData, setBurgersData] = useState([{}]);

 // let burgersData = [];

  useEffect(() => {
    const fetchBurgers = async () => {
      try {
        const response = await fetch(getBurgersData);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBurgersData(data)
       //burgersData = [...burgersData, data];
      } catch (error) {
        console.error("Error fetching burgers:", error);
      }
    };

    fetchBurgers();
  }, []);

  return (
      <div className="px-4 py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Muksal Fictitious Burger Joint</h2>
      <p className="text-center mb-8 text-gray-400 max-w-xl mx-auto">
          Discover The Latest Flavors At Muksal! No Matter What Time Of Day, Our Amazing Bugers Are Here To Satisfy Any Craving.
        </p>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {
          burgersData.map(burgerdata => (
            <BurgerList key={burgerdata.burgerId} burgerData={burgerdata} />
          ))

        }
      </div>
      
      </div>
  );
}

export default FoodOrder;
