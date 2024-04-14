import axios from 'axios';

const getData = async (url, token) => {
  try {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const response = await axios.get(url,config);
    console.log(response.data)
    
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error.message);
    throw error;
  }
};

export default getData;