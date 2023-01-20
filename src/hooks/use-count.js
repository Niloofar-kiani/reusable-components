import {useState, useEffect} from 'react';

function useCount(initialCount){
  const [count, setCount] = useState(initialCount);

  useEffect(()=>{
    console.log(count);
  },[count])

  const increment = () =>{
    setCount(count +1)
  }
return{
  count,
  increment,
}
}

export default useCount;