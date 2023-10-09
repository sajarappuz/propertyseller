import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Header from './components/Header';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import Search from './pages/Search';
import Contact from './components/Contact';
import ListingItem from './components/ListingItems';
import SignUp from './pages/SignUp';

function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/signout' element={<SignUp/>}/>
    <Route path='/profile'  element={<Profile/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/listitem' element={<ListingItem/>}/>
    <Route path='/search' element={<Search />} />
    <Route path='/about' element={<About/>}/>
    <Route path='/createlisting' element={<CreateListing />} />
    <Route path='/updatelisting' element={<UpdateListing />}/>
    <Route path='/listing' element={<Listing />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App