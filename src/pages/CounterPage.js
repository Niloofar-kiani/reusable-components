import Button from '../components/Button';
import {useState, useEffect} from 'react';

const CounterPage = ({initialCount}) => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log(count);
  },[count])

  const increment = () =>{
    setCount(count +1)
  }
  const decrement = () =>{
    setCount(count -1)
  }
  const reset = () =>{
    setCount(initialCount)
  }
  const changeCounterValue = (value) =>{
    setCount(parseInt(value))
  }
  const changeAmount = (value) =>{
  setCount(count + parseInt(value))
  }


  return (
    <div>
     <p>Count is : {count}</p>
     <div className='flex'>
   <Button primary onClick={increment}>+</Button>
   <Button className='mx-3' primary onClick={decrement}>-</Button>
   <Button className='mx-3' primary onClick={reset}>reset</Button>
     </div>
     <input 
     type="number"
     placeholder='Enter initial value' 
     className='border-2 mt-3'
     onKeyUp={(e)=>{
      if(e.key === 'Enter'){
        changeCounterValue(e.target.value)}}
      }
     />
       <input 
     type="number"
     placeholder='Amount to increment' 
     className='border-2 m-3'
     onKeyUp={(e)=>{
      if(e.key === 'Enter'){
        changeAmount(e.target.value)}}
      }
     />
    </div>
  )
}

export default CounterPage;