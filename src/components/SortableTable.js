import Table from "./Table";
import {GoChevronDown,GoChevronUp} from 'react-icons/go';
import useSort from '../hooks/use-sort';

const SortableTable = (props) => {
  const {config, data} = props;

   const {sortBy, sortOrder,sortedData, sortColumn} = useSort(data, config)

  const updatedConfig = config.map((column)=>{
    if(!column.sortValue){
      return column;
    }
    return{
      ...column,
      header:() => <th className='cursor-pointer' onClick={() => sortColumn(column.label)}>
        <div className='flex items-center'>
        {getIcons(column.label,sortBy, sortOrder)}
        {column.label} 
        </div>
        </th>
    } 

  })


  return (

    <div>
      <Table {...props} data={sortedData} config={updatedConfig}/></div>
  )
}

const getIcons = (label,sortBy,setOrder) =>{
  if(label !== sortBy){
    return (
      <div>
        <GoChevronUp/>
        <GoChevronDown/>
      </div>
    )
  }
  if(setOrder === null){
    return (
      <div>
        <GoChevronUp/>
        <GoChevronDown/>
      </div>
    )
  }else if(setOrder === 'asc'){
    return <GoChevronUp/>
  }else if(setOrder === 'desc'){
    return <GoChevronDown/>
  }

}

export default SortableTable