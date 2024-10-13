import "./CDP.css";
import BackButton from "./BackButton";
import { useState, useEffect } from "react";
import Data from './data';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ShimmerCountryList from "./ShimmerCountryList";
function CountryDetailPage() {
  const [CountrytData, setCountrytData] = useState(null);
  const[notFound,setnotFound]=useState(false);

  const CountryName = useParams().country;
  console.log(CountryName)
  console.log(CountrytData)

  useEffect(() => {
    if (CountryName) {
  
      const Filter = Data.filter((country) => {
        return country.name.common === CountryName;
      });

      if (Filter.length > 0) {
        setCountrytData(Filter[0]);
        setnotFound(false);
      }
      else{
        setnotFound(true);
      }
    

      }
    }, [CountryName]);

    
   
      if (notFound) {
      return <div>Country not found.</div>;
    }

  // if (!CountrytData) {
  //   return <div>Loading...</div>;
  // }
  
  if(!CountrytData){
    return <ShimmerCountryList/>
  };
   return(
   

    <main>
       <>
       <BackButton/>
      
      <div className="mainPage">
        <div className="ImageDiv">
          {CountrytData.flags && (
            <img src={CountrytData.flags.svg} alt={`${CountryName} flag`} />
          )}
        </div>

        <div className="countryDescription">
          <div className="OuterContent">
            <div className="First">
              <h2>{CountryName}</h2>
              <p>
                <b>Native Name : </b>{CountrytData.name.nativeName && CountrytData.name.nativeName[Object.keys(CountrytData.name.nativeName)[0]].common}
              </p>
              <p>
                <b>Population :</b> {CountrytData.population.toLocaleString()}
              </p>
              <p>
                <b>Region :</b> {CountrytData.region}
              </p>
              <p>
                <b>Sub Region :</b> {CountrytData.subregion}
              </p>
              <p>
                <b>Capital :</b> {CountrytData.capital}
              </p>
            </div>
            <div className="second">
              <p>
                <b>Top Level Domain :</b> {CountrytData.tld.join(", ")}
              </p>
              <p>
                <b>Currencies :</b> {Object.values(CountrytData.currencies).map(currency => currency.name).join(", ")}
              </p>
              <p>
                <b>Languages :</b> {Object.values(CountrytData.languages).join(", ")}
              </p>
            </div>
          </div>
          <div className="lastrow">
            <p>
              <b>Border Countries: </b>
            </p>
            {CountrytData.borders && CountrytData.borders.length > 0 ? (
              CountrytData.borders.map(border => (
                <Link key={border} to={`${border}`}>{border}</ Link>
              ))
            ) : (
              <p>None</p>
            )}
          </div>
        </div>
      </div>
    </>
    </main>
   
  );
}


export default CountryDetailPage;
