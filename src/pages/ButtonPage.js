import Button from '../components/Button';
import { BsFillBasket2Fill,BsFillCheckCircleFill,BsFillHandIndexThumbFill } from "react-icons/bs";

const ButtonPage = () => {
  const handleClick = () =>{}
  return (
    <div>
      <div>
        <Button primary onClick={handleClick} className='mb-5'><BsFillHandIndexThumbFill/>Click Me!</Button>
      </div>
      <div>
        <Button success rounded onMouseEnter={handleClick}><BsFillCheckCircleFill/>Save</Button>
      </div>
      <div>
        <Button secondary outline onMouseLeave={handleClick}><BsFillBasket2Fill/>Buy!</Button>
      </div>
      <div>
        <Button warning outline>Add to Card</Button>
      </div>
      <div>
        <Button danger rounded>Send</Button>
      </div>
    </div>
  )
}

export default ButtonPage;