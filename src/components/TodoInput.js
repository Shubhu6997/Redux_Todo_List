import React, {useState} from "react";
import {useDispatch} from "react-redux";

const TodoInput = () =>{
    
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState("");
    const handleChange = (event) => setNewTodo(event.target.value);
  
    const handleClick = () => dispatch({
        type: "ADD_TODO",
        payload: {
            label: newTodo,
            id: Math.ceil(Math.random() * 100)
        }
    })
    return(
       <React.Fragment>
           <input type = "text" onChange={handleChange} value={newTodo}/>
           <button onClick={handleClick}>Add Todo</button>
       </React.Fragment> 
    )
}
export default TodoInput;  