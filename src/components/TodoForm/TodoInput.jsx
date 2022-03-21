import React from 'react'
import "./TodoInput.css"

export const TodoInput = ({handleAdd}) => {
    const [title, setTitle] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [department, setDepartment] = React.useState("");
    const [role, setRole] = React.useState("");
    const [salary, setSalary] = React.useState(0);
  return (
    <div className='inputRows'>
    <input placeholder='Name' value={title} onChange={(e)=>setTitle(e.target.value)}/>
    <input placeholder="Gender" value={gender} onChange={(e)=>setGender(e.target.value)}/>
    <input placeholder='Department' value={department} onChange={(e)=>setDepartment(e.target.value)} />
    <input placeholder='Role'value={role} onChange={(e)=>setRole(e.target.value)}/>
    <input placeholder='Salary' value={salary} onChange={(e)=>setSalary(e.target.value)}/>
    <button id='button' onClick={()=>handleAdd(title,gender,department,role,salary)}>ADD EMPLOYEE</button>
    
    </div>
  )
}
