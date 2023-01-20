import React,{useEffect, useState, useRef} from 'react'
import {AiFillCaretDown, AiFillCaretLeft} from 'react-icons/ai';
import Panel from './Panel';

const Dropdown = ({options, value, onChange}) => {
  const [isOpen, setIsOpen] = useState(false);
 
  const divElement = useRef();

  useEffect(()=>{
    const handler =(event) =>{
      if(!divElement.current){
        return;
      }if(!divElement.current.contains(event.target)){
        setIsOpen(false);
      }
    
    }
    document.addEventListener('click',handler,true);
    return()=>{
      document.removeEventListener('click',handler); 
    }
  })

  const handleClick =() =>{
    setIsOpen(!isOpen);
  }
 const handleOptionClick=(option)=>{
  //closing The Dropdown
  setIsOpen(false);
  onChange(option);
 }

  const renderedOptions = options.map((option)=>{
    return <div
    className='hover:bg-sky-100 rounded cursor-pointer p-1' 
    key={option.value}
    onClick={()=>handleOptionClick(option)}>
      {option.label}</div>

  })

  const icon = (<span className='text-2xl'>
  {isOpen ? <AiFillCaretDown/> : <AiFillCaretLeft/>}
  </span>)

  return (
    <div ref={divElement} className='w-48 m-5 relative'>
      <Panel className='flex justify-between items-center cursor-pointer' 
      onClick={handleClick}>{value?.label || 'Select...'}
      {icon}
      </Panel>
     {isOpen && <Panel className='absolute top-full'>
      {renderedOptions}</Panel>}
    </div>
  )
}

export default Dropdown