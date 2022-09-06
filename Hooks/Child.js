import React from 'react'



const Child = (data) => {

  const addToCart =() => {
    data.addToCart(data.item)
  
    
  }

  return (
    <div>

        <h1>{data.item.name}</h1>
        <button onClick={addToCart}>AddTOCart</button>
    </div>
  )
}

export default Child