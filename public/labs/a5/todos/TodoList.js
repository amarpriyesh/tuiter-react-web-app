import todoItem from "./TodoItem.js"
import todo from "./todos.js"
const TodoList = () => {
   return(
   `<ul>
           ${ todo.map(todoItem)}

       </ul>
   `);

}
export default TodoList;

