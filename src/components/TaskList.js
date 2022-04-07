import React, { useState } from "react";
import Todo from "./Todo";

export const TaskList=(props)=>{
    const {tasks, setTasks,filter} = props;
    const FILTER_MAP = {
        All: () => true,
        Active: task => !task.completed,
        Completed: task => task.completed
      };
    const FILTER_NAMES = Object.keys(FILTER_MAP);

    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map(task => {
          if (id === task.id) {
            return {...task, completed: !task.completed}
          }
          return task;
        });
        setTasks(updatedTasks);
      }
  
      function deleteTask(id) {
        const remainingTasks = tasks.filter(task => id !== task.id);
        setTasks(remainingTasks);
      }
  
      function editTask(id, newName) {
        const editedTaskList = tasks.map(task => {
          if (id === task.id) {
            return {...task, name: newName}
          }
          return task;
        });
        setTasks(editedTaskList);
    } 
  
    return(tasks.filter(FILTER_MAP[filter])
    .map(task => (
    <Todo
     id={task.id}
     name={task.name}
     completed={task.completed}
     key={task.id}
     toggleTaskCompleted={toggleTaskCompleted}
     deleteTask={deleteTask}
     editTask={editTask}
    />
    )))
}
