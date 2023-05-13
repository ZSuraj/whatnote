import { createContext, useState } from 'react';

export const MyContext = createContext("DefaultValue");

export function MyProvider(props) {

    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const [counter3, setCounter3] = useState(0)
    const [city, setCity] = useState("")

    const increment = (counter) => {
        if (counter === 1) {
            setCounter1(counter1 + 1);
        } else if (counter === 2) {
            setCounter2(counter2 + 1);
        } else if (counter === 3) {
            setCounter3(counter3 + 1);
        }
    };

    const decrement = (counter) => {
        if (counter === 1 && counter1 > 0) {
            setCounter1(counter1 - 1);
        } else if (counter === 2 && counter2 > 0) {
            setCounter2(counter2 - 1);
        } else if (counter === 3 && counter3 > 0) {
            setCounter3(counter3 - 1);
        }
    };

    return (
      <MyContext.Provider value={
        {   
            counter1,
            counter2,
            counter3,
            setCounter1,
            setCounter2,
            setCounter3,
            increment,
            decrement,
            city,
            setCity,

        }
        }>
        {props.children}
      </MyContext.Provider>
    );
  }
  