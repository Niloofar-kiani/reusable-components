import { useState } from 'react'
import Dropdown from '../components/Dropdown'

const DropdownPage = () => {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) =>{
    setSelection(option)
  }
  const options = [
    {label:'red', value:'red'},
    {label:'blue', value:'blue'},
    {label:'black', value:'black'},
  ]
 return <div className='flex'>
  <Dropdown 
 options={options}
 value={selection}
 onChange={handleSelect}
 />
 </div>
}

export default DropdownPage;