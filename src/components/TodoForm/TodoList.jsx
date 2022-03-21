import React from 'react'
import "./TodoList.css"
export const TodoList = ({title,gender,department,role,salary,id}) => {
  return (
    <div className='listView'>
    <ul> 
   <h3>Name: {title} </h3>  
   <h3>Gender: {gender}</h3>
   <h3>Department: {department}</h3>
   <h3>Role: {role}</h3>
   <h3>Salary: {salary}</h3>
    </ul>    
    </div>
  )
}
