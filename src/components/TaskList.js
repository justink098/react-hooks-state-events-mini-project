import React,{useState} from "react";
import Task from "./Task"

function TaskList({tasks}) {
  const [item, setItem]= useState(tasks)
  const taskarray= item.map((task)=>{
    console.log(task)
    return <Task key={task.text} category={task.category} text={task.text} filterBt={filterBt}/>
  })
  function filterBt(value){
    const filtered= item.filter((e)=>{
      return e.text !== value
    })
    setItem(filtered)
  }

  return (
    <div className="tasks">

      {taskarray}
    </div>
  );
}

export default TaskList;
