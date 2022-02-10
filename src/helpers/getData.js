import axios from 'axios';
// const baseUrl = process.env.REACT_APP_API_URL;


const getData = async () => {
  const getData = await axios({
    method: 'GET',
    url: 'http://api.mediastack.com/v1/news?access_key=a99cc5bb883336392f6a53e8174e3db0',
    headers:{
      'Content-Type':'application/json',
    },
  });
  return getData;
};

export default getData;
