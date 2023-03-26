import list from "./todo.json"

import TodoItem from "./todo-item"

import {useState} from "react";


const TodoList = () => {
    const [list1,setList] = useState(list)
    function delete1(id){
        console.log(id)
        let k = -1
        k = list1.filter(lis => lis._id!==id)

            setList(k)


    }

    function edit(event,obj) {
        const title = event.target.value

      const  k = list1.map(lis => {
          if (lis._id===obj._id) {
              obj.title = title
          return obj
      }
          else {
              return lis
          }

      })

        setList(k)
        console.log(k)
    }


    function setList1(obj){
       const k = list1.length
        const obj2 = {
           "_id": k+1,
            "title": obj
        }
        setList([...list1,obj2])
    }
return(

<div>
<h1>TODO List</h1>
    <div className="row m-2">
    <div className="col-4">
    <input id="in" type="text"/>
    </div>
    <div class="col-5">
        <button onClick={ () => setList1(document.getElementById("in").value)}>Click</button>
    </div>
    </div>
    <ul className="list-group">
    {
        list1.map(lis =>

                        <TodoItem key={lis._id} lis1={lis} del={delete1} edit={edit}/> )
    }
    </ul>
</div>
)

}

export default TodoList;



