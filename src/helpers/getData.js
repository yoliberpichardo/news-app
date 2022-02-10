import axios from 'axios';
const baseUrl = process.env.REACT_APP_API_URL_local;


const getData = async (end) => {
  const getData = await axios({
    method: 'GET',
    url: `${baseUrl}${end}`,
    headers:{
      'Content-Type':'application/json',
    },
  });
  return getData.data;
};

export default getData;
