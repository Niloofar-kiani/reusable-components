import Button from '../components/Button';
import useCount from '../hooks/use-count';

const CounterPage = ({initialCount}) => {
  const {count, increment} = useCount(initialCount)

  return (
    <div>
     <p>Count is : {count}</p>
   <Button primary onClick={increment}>increment</Button>
    </div>
  )
}

export default CounterPage;