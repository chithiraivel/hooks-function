import React from 'react'

const Remove1 = (data) => {
   
    const one =() => {
        data.one(data.item) 
      }
    
    const plus = () => {
        data.plus(data.item)
    }

    const minus = () => {
        data.minus(data.item)
    }

  return (
    <div>
        <h1>{data.item.name} qty:{data.item.qty}</h1>
        <button onClick={one}>Remove</button>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>

    </div>
  )
}

export default Remove1