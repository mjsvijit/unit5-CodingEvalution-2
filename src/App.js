import React from "react"
import './App.css';
import { Todo } from "./components/TodoForm/Todo";
// import { ChildToParent } from "./components/counter/ChildToParent";
// import { ParentToChild } from "./components/counter/ParentToChild";

function App() {
  // const [inputBoxValue, setInputBoxValue] = React.useState("")
//  const onInputChange=(e)=>{
//    setInputBoxValue(e.target.value);
 //}

  return (
    <div className="App">
    <Todo />
    
      
    </div>
  );
}

export default App;
