import React, { useEffect, useState } from 'react'


// use Effect hook to gets rhe data 

function App() {

  const [data , setData] = useState();

  useEffect(()=>{
    async function fetchData() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const data = await res.json() ;

      console.log(data[1])
      
      setData(data[1]);
    }

    fetchData()

  },[])

  // console.log(data ? data : "no found ")

  return (
   <>
    <div>App</div>
  <p>Only fetching the first data </p>
  <p>{data?.title}</p>

   
   
   </>)
}

export default App