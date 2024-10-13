import './ShimmerCountryList.css';
import './Card.css'

function ShimmerCountryList() {
    const arr = new Array(11).fill(null); // Initialize the array with 10 null values

    return (
        <div className="CountryContainer">
            {arr.map((e, index) => (
                <div key={index} className=" Card shimmer"></div>
            ))}
        </div>
    );
}

export default ShimmerCountryList;
