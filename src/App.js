// using here our custom useFetch hook :

import React from 'react'
import useFetch from './useFetch'

function App() {

  const { data, isLoading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");
  console.log(data);


  if (error) {
    return <div>Error in your code </div>

  }

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <ul>
        {data.map((item) => (<li key={item.id}>{item.title}</li>))}
      </ul>
    </div>
  )
}

export default App