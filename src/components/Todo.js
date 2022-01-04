import { useSelector, useDispatch} from "react-redux";

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
  
    const handleClick = id => dispatch({
        type : "DELETE_TODO",
        payload : id
    });
  
    console.log(todos);
    if(!todos || !todos.length){
        return <p>No Todos</p>
    }
  
    return(
        <ul>
            {todos.map(todo => <li key = {todos.id} onClick={()=>handleClick(todo.id)}>{todo.label}</li>)}
        </ul>
    )
}

  export default Todos;