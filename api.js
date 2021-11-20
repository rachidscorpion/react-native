// need to install npm install axios

// inside yelp.js
import axios from "axios";

  export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
      Authorization:
        "Bearer WknKyzI5P5ETY4umCYuv75kcJnZ1LgFHDCdFO4e9wIYAvrLK25QTC3CQQibn6LqiSSlpVPghzE9ApSS-DeuhR9LM2Yp9X8DauXqCITJSNk_xOzSCfSz6oR3wMTKZYXYx",
    },
  });

// inside SearchScreen.js
  const SearchScreen = ()=>{
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    let searchApi = async () => {
        const response = await yelp.get('/search', {
          params: {
            limit: 50,
            term,
            location: 'san jose'
          }

        })
        setResults(response.data.businesses)
    }
