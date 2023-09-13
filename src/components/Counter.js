import React, {useState} from 'react'

const Counter = () => {
    //This is just for example this component has no impact in our react app
    const [number, setNumber] = useState(0);

    const handleClick = () => {
        setNumber(number + 1);
        // setNumber(number => number + 1);
        console.log(number);
    }

  return (
    <div>
      <h1 style={{color: 'white'}}>{number}</h1>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Counter
