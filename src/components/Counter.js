import React, {useState, useRef} from 'react'

const Counter = () => {
    //This is just for example this component has no impact in our react app
    const [number, setNumber] = useState(0);

    //useRef Hook
    let num = useRef(0);  

    const handleClick = () => {
        setNumber(number => number + 1);
        setNumber(number => number + 1);
        setNumber(number => number + 1);
        // setNumber(number => number + 1);
        // console.log(number);

      num.current++;
      console.log(num.current);
    }

  return (
    <div>
      <h1 style={{color: 'white'}}>{number} {num.current}</h1>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Counter
