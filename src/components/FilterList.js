import React, { useState } from "react";
import FilterButton from "./FilterButton";

export default function FilterList(props){
    // const [tasks, setTasks] = useState(props.tasks);
    // const [filter, setFilter] = useState('All');
    const {tasks, setFilter, filter} = props;
    const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
  };
//   console.log(FILTER_MAP);
//   console.log(filter);
//   console.log(tasks);
  const FILTER_NAMES = Object.keys(FILTER_MAP);

function clickHandler(filter){
    setFilter(filter);
    // console.log(filter);
} 
  return (
    FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
    //   setFilter={setFilter}
      setFilter={()=>clickHandler(name)}
    />
    )))
}


