import React, {useState,useEffect} from "react";

import {useDispatch,useSelector} from "react-redux";
import {addTodo}
    from "./reducers/todos-reducer";
import {deleteTodo}
    from "./reducers/todos-reducer";
import {updateTodo}
    from "./reducers/todos-reducer";


const Todos = () => {
    const todos
        = useSelector(state => state.todos);
    const [todo, setTodo] = useState({do: 'Hey'});
    const dispatch = useDispatch();
    const createTodoClickHandler = () => {
        dispatch(addTodo(todo))
    }

    const deleteTodoClickHandler = (_id) => {

        dispatch(deleteTodo(_id))
        console.log("Log",_id)

    }

    function toggleTodo(index){
        dispatch(updateTodo(index))
    }





    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue
        };
        setTodo(newTodo);
    }

    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">


                <li className="list-group-item">
                    <button onClick={createTodoClickHandler}
                            className="btn btn-primary w-15
                          float-end">
                        Create</button>

                    <input
                        onChange={todoChangeHandler}
                        value={todo.do}
                        className="form-control w-75"/>
                </li>

                {

                    todos.map((todo,index) =>
                                  <li key={todo._id} className="list-group-item">
                                      <input className="me-2" type="checkbox" checked={todo.done} onChange={() => toggleTodo(index)}/>
                                      {todo.do}
                                      <button onClick={() => deleteTodoClickHandler(index)}
                                              className="btn btn-danger w-10
                          float-end">
                                          Delete</button>
                                  </li>
                    )
                }
            </ul>
        </>
    );
};
export default Todos;