import React, {useState, useRef, useMemo, useCallback} from 'react';


const Counter = () => {
    //This is just for example this component has no impact in our react app
    const [number, setNumber] = useState(5);

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
    //Fibonacci function to understand memoization
    const fibFx = useCallback(function fib(n) {
      if(n===1 || n===2) {
        return 1;
      }
      return fib(n-1)+fib(n-2);
    }, []);

    //Usinf useMemo hook
    const fibMemoized = useMemo(() => fibFx(number), [number, fibFx]);

  return (
    <div>
      <h1 style={{color: 'white'}}>{number} {num.current} | {fibMemoized}</h1>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Counter
