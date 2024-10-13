
import './CardContainer.css'
import Card from './Card';
import { useState,useEffect } from 'react';
import Data from './data'
import SearchBar from "./SearchBar";
import Select from './Select'
import './Select.css'
import './SearchBar.css'


function CardContainer({Query}) {


    
    
    
    return ( 
        <>
       
        

        <div className='CountryContainer'>
            
       {Data.filter((country)=>
        country.name.common.toLowerCase().includes(Query))
        .map((country)=>
            <Card  key={country.name.common} Name={country.name.common}  Population={country.population.toLocaleString('en-IN')} Region={country.region} Capital={country.capital} flag={country.flags.svg}/>
        )
       } 


  
       
        
        
            
        
        
        </div>
        </>
     );
}

export default CardContainer;