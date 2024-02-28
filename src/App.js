import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './App.css';
import SplashScreen from './components/Splash';
import { useState } from 'react';
import Welcome from './components/Welcome';
import {Routes, Route} from "react-router-dom"
import VerificationPhone from './components/VerificationPhone';
import EnterPhone from './components/EnterPhone';
import Location from './components/Location';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import ForgetPass from './components/ForgetPass';
import Home from './components/home/Home';
import Product from './components/home/Product';
import Explore from './components/explore/Explore';
import Cart from './components/cart/Cart';
import Favourites from './components/favorites/Favourites';
import Account from './components/Account/Account';
import AllProducts from './components/pages/AllProducts';
import Success from './components/payments/Success';
import Failed from './components/payments/Failed';
import ScanGo from './components/Account/ScanGo';
import MyClub from './components/Account/MyClub';
import TransactionHistory from './components/Account/TransactionHistory';
import ScanGoGuide from './components/Account/ScanGoGuide';
import Profile from './components/Account/Profile';
// import { useDispatch } from "react-redux";
// import { fetchOffers } from './rtk/slices/offers-slice';
// import { fetchProducts } from './rtk/slices/products-slice';
// import { fetchCategories } from './rtk/slices/categories-slice';
import ScanGoMore from './components/Account/ScanGoMore';
import Orders from './components/Account/Orders';
import Address from './components/Account/Address';
import Coupons from './components/Account/Coupons';
// import { fetchOrders } from './rtk/slices/order-slice';

function App() {
  const currentRoute = useLocation().pathname
  // const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
    // dispatch(fetchOffers())
    // dispatch(fetchProducts())
    // dispatch(fetchCategories())
    // dispatch(fetchOrders())
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
    <div className='tab:border tab:border-solid tab:border-e2 tab:rounded-radius relative dark:bg-slate-700'>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/sign-in/verify-phone' element={<VerificationPhone/>}/>
        <Route path='/sign-in/enter-phone' element={<EnterPhone/>}/>
        <Route path='/sign-in/location' element={<Location/>}/>
        <Route path='/sign-in/forgot-password' element={<ForgetPass/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route 
          path={`/home/${currentRoute.includes("search")? "search" : "categories"}/:categoryTitle`} element={<AllProducts/>}
        /> 
        <Route path='/home/:productTitle' element={<Product/>}/>
        <Route path='/home/search' element={<Explore/>}/>
        <Route path='/home/cart' element={<Cart/>}/>
        <Route path='/home/cart/payment-success' element={<Success/>}/>
        <Route path='/home/cart/payment-failed' element={<Failed/>}/>
        <Route path='/home/favourites' element={<Favourites/>}/>

        {/* Account Page Routes */}

        <Route path='/account' element={<Account/>}/>
        <Route path='/account/profile-information' element={<Profile/>}/>
        <Route path='/account/scan&go' element={<ScanGo/>}/>
        <Route path='/account/scan&go/user-guide' element={<ScanGoGuide/>}/>
        <Route path='/account/scan&go/more' element={<ScanGoMore/>}/>
        <Route path='/account/my-club' element={<MyClub/>}/>
        <Route path='/account/transaction-history' element={<TransactionHistory/>}/>
        <Route path='/account/orders' element={<Orders/>}/>
        <Route path='/account/addresses' element={<Address/>}/>
        <Route path='/account/coupons' element={<Coupons/>}/>


        <Route path='/home/search/:categoryTitle/:searchedProductTitle' element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App;