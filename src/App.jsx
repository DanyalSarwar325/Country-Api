import { useState } from 'react'
import Navbar from './Navbar'
import CardContainer from './CardContainer'
import SearchBar from './SearchBar'
import Select from './Select'
import { Outlet } from 'react-router-dom'

import './App.css'
import CountryDetailsPage from './CountryDetailPage'

function App() {
  
  return(

    <>
      <Navbar/>
    <Outlet/>
    
  
 
    
  </>
  )
  
}

export default App;
