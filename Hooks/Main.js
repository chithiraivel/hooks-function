import React, { useState } from "react";
import Child from "./Child";
import Remove1 from "./Remove1";

const Main = () => {
  const [details, setDeatils] = useState([
    { name: "java", id: 1 },
    { name: "javascript", id: 2 },
    { name: "python", id: 3 },
    { name: "C#", id: 4 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (data1) => {
    const isExist = cart.some((prod) => prod.id === data1.id);

    if (isExist) {
      const data = cart.map((prod) => {
        if (prod.id === data1.id) {
          return {
            ...prod,
            qty: prod.qty + 1,
          };
        } else {
          return prod;
        }
      });
      setCart([...data]);
    } else {
      setCart([...cart, { ...data1, qty: 1 }]);
    }
  };

  const plus = (data1) => {
    const data = cart.map((prod) => {
      if (prod.id === data1.id) {
        return {
          ...prod,
          qty: prod.qty + 1,
        };
      } else {
        return prod;
      }
    });
    setCart([...data]);

  };

  const minus = (data1) => {
    if (data1.qty > 1) {
      const data = cart.map((prod) => {

        if (prod.id === data1.id) {
          return {
            ...prod,
            qty: prod.qty - 1,
            
          };
        } else {
          return prod;
        }
      });
      setCart([...data]);
    } else {
      one(data1);
    }

  };

  const one = (data) => {
    let a = cart.filter((b) => {
      return data !== b;
    });
    setCart([...a]);
  };
  return (
    <div>
      {details.map((data, index) => (
        <Child item={data} key={index} addToCart={addToCart} />
      ))}

      {cart.map((data, index) => (
        <Remove1 item={data} key={index} one={one} plus={plus} minus={minus} />
      ))}
    </div>
  );
};

export default Main;
