/*import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import BeerComponent from '../Components/beer';
import Navigation from '../Components/navigation';

function useData() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('https://random-data-api.com/api/v2/beers')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        // handle errors
      });
  }, []);
  return data;
}

function BeerPage() {
  const data = useData();
  return (
    <div className="App">
      <Navigation/>
      <BeerComponent data={data}/>
    </div>
  );
}

export default BeerPage;*/
