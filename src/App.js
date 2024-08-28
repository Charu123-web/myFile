import logo from './logo.svg';
import './App.css';
import LoginRegister from './LoginRegister/LoginRegister';
import Register from './LoginRegister/Register';
import { BrowserRouter as Router, Switch, Route, Link,Routes } from 'react-router-dom';
import RestaurantList from './Components/RestaurantList';

function App() {
  return (
    
    <div >
      <>
    
         
       <RestaurantList/>  
      
    
      </>
        </div>
    
  );
}

export default App;
