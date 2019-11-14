import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm, //state
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setError('something went wrong');
    }
  };
  //searchApi yi cağırırsak eger... önce işlenir.Bu da performansı azaltır
  //searchapi("pasta")===kotu kod
  useEffect(() => {
    searchApi('pasta'); //baslangıc degerimiz pasta
  }, []);

  return [searchApi, results, error];
};
