import React from 'react';
//import Table from '../components/Table';
import SortableTable from '../components/SortableTable';

const TablePage = () => {
  const data = [
    {name: 'Audi', color: 'bg-yellow-300', score: 2},
    {name: 'Mercedes', color: 'bg-black', score: 1},
    {name: 'BMW', color: 'bg-gray-400', score: 4},
    {name: 'Ferrari', color: 'bg-red-400', score: 3},
  ]
  const config = [
    {label:'name',render:(fruit)=>fruit.name, sortValue:(fruit)=> fruit.name},
    {label:'color',render:(fruit)=><div className={`p-3 m-2 ${fruit.color}`}></div>},
    {label:'score',render:(fruit)=>fruit.score, sortValue:(fruit)=>fruit.score},
  ]

  const keyFn = (fruit) =>{
    return fruit.name;
  }
  return (
    <div><SortableTable data={data} config={config} keyFn={keyFn}/></div>
  )
}

export default TablePage