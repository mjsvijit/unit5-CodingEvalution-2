import React from 'react'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'
import {v4 as uuid} from "uuid"
import "./Todo.css"

export const Todo = () => {
   const [data, setData] = React.useState([]);
   
   const handleAdd =(title,gender,department,role,salary)=>{
       const payload={
           title,
           gender,
           department,
           role,
           salary,
           id:uuid()
       }
       setData([...data,payload])
       
   }

//    const handleToggle =(id)=>{
//        const updatedData= data.map((item)=> item.id === id? { ...item, status : item.status}:item)
//        console.log(updatedData)  ;
//        setData(updatedData);
   
//     }

  return (
    <div>
    <TodoInput handleAdd={handleAdd}/>
    {data.map((item,gender,department,role,salary,id)=>(
        <TodoList {...item}{...gender} {...department} {...role}{...salary} key={item.id}/>
    ))}
    
    </div>
  )
}
