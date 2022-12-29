import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import BeerComponent from './Components/beer';
import Navigation from './Components/navigation';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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

  const firebaseConfig = {
    apiKey: "AIzaSyAxqsoNnEvj0fMFIVCpBYIGI6jq8qRf-gU",
    authDomain: "ardaregister-18d82.firebaseapp.com",
    databaseURL: "https://ardaregister-18d82-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ardaregister-18d82",
    storageBucket: "ardaregister-18d82.appspot.com",
    messagingSenderId: "770280114552",
    appId: "1:770280114552:web:dc39205eeed1bf6c8ce08d",
    measurementId: "G-CPQ56BXP1V"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}

function App() {
  const data = useData();
  return (
    <div className="App">
      <Navigation/>
      <BeerComponent data={data}/>
    </div>
  );
}

export default App;
