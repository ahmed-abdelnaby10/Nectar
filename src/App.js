import { useEffect } from 'react';
import './App.css';
import SplashScreen from './components/Splash';
import { useState } from 'react';
import Welcome from './components/Welcome';
import {Routes, Route} from "react-router-dom"
import SignIn from './components/SignIn';
import VerificationPhone from './components/VerificationPhone';
import EnterPhone from './components/EnterPhone';
import Location from './components/Location';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgetPass from './components/ForgetPass';
import Home from './components/home/Home';
import Product from './components/home/Product';
import Footer from './components/Footer';
import Explore from './components/explore/Explore';
import Cart from './components/cart/Cart';
import Favourites from './components/favorites/Favourites';
import Account from './components/Account/Account';
import SearchedProducts from './components/explore/SearchedProducts';
import Offers from './components/offers/Offers';
import Success from './components/payments/Success';
import Failed from './components/payments/Failed';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  },[])
  if (isLoading) {
    return(
      <SplashScreen/>
      )
    }
  return (
    <div className='tab:border tab:border-solid tab:border-e2 tab:rounded-md relative pb-20 dark:bg-slate-700'>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-in/verify-phone' element={<VerificationPhone/>}/>
        <Route path='/sign-in/enter-phone' element={<EnterPhone/>}/>
        <Route path='/sign-in/location' element={<Location/>}/>
        <Route path='/sign-in/forgot-password' element={<ForgetPass/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/home/offers/:offerTitle' element={<Offers/>}/>
        <Route path='/home/:productTitle' element={<Product/>}/>
        <Route path='/home/search' element={<Explore/>}/>
        <Route path='/home/cart' element={<Cart/>}/>
        <Route path='/home/cart/payment-success' element={<Success/>}/>
        <Route path='/home/cart/payment-failed' element={<Failed/>}/>
        <Route path='/home/favourites' element={<Favourites/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/home/search/:cateTitle' element={<SearchedProducts/>}/>
        <Route path='/home/search/:cateTitle/:searchedProductTitle' element={<Product/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;