import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar/Navbar';
import Card from '../components/Cards/Card'
import getData from '../helpers/getData'

export const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getData('api')
      .then(data => {
        setData(data.data)
    })
  }, []);


    return(
        <>
            <Navbar />
            <h1>Home</h1>
            <div>
              {data &&
                data.map((card) => {
                  return <Card content={card} key={card._id}/>
                })
              }
            </div>
        </>
    );
};

