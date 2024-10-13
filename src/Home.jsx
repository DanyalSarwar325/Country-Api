import { useState } from "react";
import CardContainer from "./CardContainer";
import SearchBar from "./SearchBar";
import './Home.css'
import Select from "./Select";
import ShimmerCountryList from "./ShimmerCountryList";
import { useParams } from "react-router-dom";

function Home() {
    const [Query,setQuery]=useState("")
    return ( 

        <>
        

        <div className="Container">
        <SearchBar setQuery={setQuery} />
        <Select/>
       </div>
      
        <CardContainer Query={Query}/>
        </>
     );
}

export default Home;