import list from "./todo.json"

import TodoItem from "./todo-item"

const TodoList = () => {
return(

<div>
<h1>TODO List</h1>

{
list.map(lis => <TodoItem key={lis.id} lis1={lis}/>)
}
</div>
)

}

export default TodoList;



