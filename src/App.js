import logo from './logo.svg';
import './App.css';
import LoginRegister from './LoginRegister/LoginRegister';
import Register from './LoginRegister/Register';
import { BrowserRouter as Router, Switch, Route, Link,Routes } from 'react-router-dom';
import RestaurantList from './Components/RestaurantList';

// function Layout() {
//   return (
    
//     <div className='app-container' >
//         <header className="app-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2 className="App-title">Food Ordering Portal</h2>
//         </header>
//       <>
      
    
//       </>
//     </div>
    
//   );
// }

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <Link to="/">
          <img src={logo} className="layout-logo" alt="logo" />
        </Link>
        <h1 className="layout-title">Food Ordering Portal</h1>
      </header>
      <main className="layout-main">
        {children}
      </main>
    </div>
  );
};

export default Layout;
