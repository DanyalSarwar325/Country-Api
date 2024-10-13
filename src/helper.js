

//const [countries, setCountries] = useState([]);
    // const [error, setError] = useState(null);

    // const getData = async (retries = 3) => {
    //     try {
    //         const controller = new AbortController();
    //         const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 seconds timeout

    //         let response = await fetch(' ', {
    //             signal: controller.signal,
    //         });
    //         clearTimeout(timeoutId);

    //         if (!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }

    //         let data = await response.json();
    //         setCountries(data);
    //     } catch (error) {
    //         if (error.name === 'AbortError') {
    //             console.warn('Fetch request was aborted due to timeout');
    //         } else {
    //             console.error('Error fetching data:', error);
    //         }

    //         if (retries > 0) {
    //             console.warn(`Retrying... (${3 - retries + 1})`);
    //             setTimeout(() => getData(retries - 1), 1000); // Wait 1 second before retrying
    //         } else {
    //             setError('Failed to fetch data. Please try again later.');
    //         }
    //     }
    // };

    // useEffect(() => {
    //     getData();
    // }, []);