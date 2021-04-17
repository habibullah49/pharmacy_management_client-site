import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import MedichineDetail from './components/MedichineDetail/MedichineDetail';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import About from './components/About/About';
import Footer from "./components/Footer/Footer";
import Help from "./components/Help/Help";
import Story from './components/Story/Story';
import Contact from "./components/Contact/Contact";
import Return from "./components/Return/Return";

export const userContext=createContext();

function App() {
  const[loggedInUser,setLoggedInUser]=useState({});
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <p>Email:{loggedInUser.email}</p>      
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/shop">
          <Shop></Shop>
          </Route>
          <Route path="/review">
          <Review></Review>
          </Route>
          <PrivateRoute path="/inventory">
            <Inventory></Inventory>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route exact path="/">
            <Shop></Shop>          
          </Route>
          <Route exact path='/story'>
            <Story></Story>          
          </Route>
          <Route exact path='/contact'>
            <Contact></Contact>
          </Route>

          <Route exact path='/help'>
           <Help></Help>
          </Route>

          <Route exact path='/return'>
           <Return></Return>
          </Route>
          <Route path="/product/:productKey">
            <MedichineDetail></MedichineDetail>
          </Route>
         
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
               
      </Router>
          
    </userContext.Provider>
  );
}

export default App;
