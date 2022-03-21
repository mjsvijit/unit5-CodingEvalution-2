import React from 'react'
    const Child = ({count,handleIncrement,handleDecrement}) =>{
           return (
               <div>
               <h1>{count}</h1>
               <button onClick={handleIncrement}>+</button>
               <button onClick={handleDecrement}>-</button>
               
               </div>
           )
    }
export const ChildToParent = () => {
   const [count, setCount] = React.useState(0)
   const handleChange =(e)=>{
       setCount(count+e);
   }

  return (
    <div>
        <h1>child to parent</h1>
        <Child count={count}  handleIncrement={()=>handleChange(1)} handleDecrement={()=>handleChange(-1)}/>
    </div>
  )
}
