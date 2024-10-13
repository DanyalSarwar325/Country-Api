import './Card.css'
import './helper'
import { useEffect,useState } from 'react';
import CountryDetailsPage from './CountryDetailPage';
import { Link } from 'react-router-dom';
function Card ({Name,Population,Region,Capital ,flag}) {

    
    return ( 
        <Link  className='Card' to={`${Name}`}>
            <img src={flag} alt="Image" />
            <div className='Text'>
                <h3 className='heading'>{Name}</h3>
                <p><b>Population :</b>{Population}</p>
                <p><b>Region :</b>{Region}</p>
                <p><b>Capital :</b>{}{Capital}</p>
            </div>
        </Link>

     );
}

export default Card ;