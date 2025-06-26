  import { addListener } from '@reduxjs/toolkit';
  import React from 'react'
  // use Callack is easy nd we can easily tackle him later 

  import { useEffect, useState } from "react";

  function useFetch(url)
  {
    const [data, setData] = useState();
    const [error , setError] = useState();
    const [loading , setIsloading] = useState(true);


    useEffect(()=>{

      const fetchData = async () =>{
      try{
          setIsloading(true);
        const res = await fetch(url);
        if(!res.ok)
          throw new Error("something went wrong in fetching the data")
          const data = await res.json();
          setData(data);
      }
      catch(err){

        console.log(err.message)
        setError(err.message)

      }
      finally{
        setIsloading(false )
      }

      }
      fetchData()

    }, [])


    return {loading, error, data}
  }


  function App() {
  const {data , error , loading} = useFetch(`https://jsonplaceholder.typicode.com/post`);
  if(loading)
  {
    return <p>loading....</p>
  }

  if(error)
    return <p>error {error} </p>

    return (
      <ul>
        {
          data.map((each)=> <li key={each.id}>{each.title}</li>)
        }
      </ul>
    )
  }

  export default App