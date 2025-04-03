import { useContext, useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Country, State, City } from 'country-state-city';
import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';
import { motion } from 'framer-motion';
import { FormContext } from '../context/FormContext';

const ThirdStep = (props) => {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

     const { formData, setFormData } = useContext(FormContext);

    useEffect(() => {
        const result = Country.getAllCountries();
        const allCountries = result?.map(({ isoCode, name }) => ({
            isoCode,
            name,
        }));
        const [{ isoCode: firstCountry } = {}] = allCountries || [];

        setCountries(allCountries);
        setSelectedCountry(firstCountry);
    }, []);

    useEffect(() => {
        const result = State.getStatesOfCountry(selectedCountry);
        const allStates = result?.map(({ isoCode, name }) => ({
            isoCode,
            name,
        }));
        const [{ isoCode: firstState = '' } = {}] = allStates || [];

        setStates(allStates);
        setSelectedState(firstState);
        setCities([]);
        setSelectedCity('');
    }, [selectedCountry]);

    useEffect(() => {
        const result = City.getCitiesOfState(selectedCountry, selectedState);
        const allCities = result?.map(({ name }) => ({ name }));
        const [{ name: firstCity = '' } = {}] = allCities || [];

        setCities(allCities);
        setSelectedCity(firstCity);
    }, [selectedState]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true)
        try {
          //  const { user } = props; - use prop vehicle to bring this

            const selectedCountryName = countries.find(
                (country) => country.isoCode === selectedCountry
            )?.name ?? '';

            const selectedStateName = states.find(
                (state) => state.isoCode === selectedState
            )?.name ?? '';

            const updatedData = {
                country: selectedCountryName,
                state: selectedStateName,
                city: selectedCity ?? '',
            };

            const payload = {
                // the object data will be here
                ...formData,
                ...updatedData,
            };
      
            console.log("payload", payload)
            await axios.post(`${BASE_API_URL}/register`, payload);

        } catch (error) {
            console.error('Submission error:', error.response?.data || error.message);
            setIsLoading(false)
        }
    };

    useEffect(() => {
        console.log('Updated formData:', formData);
    }, [formData]);
    return (
        <Form className="input-form" onSubmit={handleSubmit}>
            <motion.div
                //className="col-md-6 offset-md-3"
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
            >
            <div className="col-md-6 offset-md-3">
                <Form.Group controlId="country" className="mb-3">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        as="select"
                        name="country"
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                    >
                        {countries.map(({ isoCode, name }) => (
                            <option value={isoCode} key={isoCode} style={{ color: 'black' }}>
                                {name}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="state" className="mb-3">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                        as="select"
                        name="state"
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                    >
                        {states.length > 0 ? (
                            states.map(({ isoCode, name }) => (
                                <option value={isoCode} key={isoCode} style={{ color: 'black' }}>
                                    {name}
                                </option>
                            ))
                        ) : (
                            <option value="">No states found</option>
                        )}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="city" className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        as="select"
                        name="city"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                    >
                        {cities.length > 0 ? (
                            cities.map(({ name }) => (
                                <option value={name} key={name} style={{ color: 'black' }}>
                                    {name}
                                </option>
                            ))
                        ) : (
                            <option value="">No cities found</option>
                        )}
                    </Form.Control>
                </Form.Group>

                    <Button variant="link" type="submit" disabled={isLoading}
                        className='btn'
                    >
                    {isLoading ? 'Submitting...' : 'Register'}
                </Button>
                </div>
            </motion.div>
        </Form>
    );
};

export default ThirdStep;
