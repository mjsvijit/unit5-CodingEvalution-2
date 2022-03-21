import React from 'react'
 const Child =({ count}) =>( 
     <> 
     <h1>Parent To Child</h1>
     <h1>{count}</h1>
     </>
 )
export const ParentToChild = () => {
  const [count, setCount] = React.useState(0);
 
    return (
    <div>
       
        <Child count={count} />
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
       
    </div>
  )
}
