import {useState} from 'react';

function useSort (data,config){
    //setOrder: 'null', 'asc', 'desc'
  //sortBy: 'null', 'name', 'score'
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const sortColumn = (label) =>{
    if(sortBy && label !== sortBy){
      setSortOrder('asc');
      setSortBy(label);
      return;
    }
    if(sortOrder === null){
      setSortOrder('asc')
      setSortBy(label);

    }else if(sortOrder === 'asc'){
      setSortOrder('desc')
      setSortBy(label);

    }else if(sortOrder === 'desc'){
      setSortBy(null);
      setSortOrder(null)
    }
  }
  let sortedData = data;
  //only sort data> if sortBy and sortOrder are not null
  if(sortBy && sortOrder){
    const {sortValue} = config.find((column)=> column.label === sortBy)
    //make a copy of 'data' prop beacause sort mutate the original array
    sortedData = [...data].sort((a,b)=>{
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if(typeof valueA === 'string'){
        return valueA.localeCompare(valueB) * reverseOrder;
      }else{
        return (valueA - valueB) * reverseOrder
      }
    })
  }
  return {
    sortBy,
    sortOrder,
    sortedData,
    sortColumn,
  }
}

export default useSort;