
import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Route,Routes} from "react-router";
import TodoList from "./todo/todo-list";
import Exam from "./exam";
import Assignment7 from "./labs/a7";


function App() {

    var str= "Here is a link<a href='#'>Link</a>"
  return (

    <div className="Container">



        <BrowserRouter>



            <Routes>
                <Route path="/*"  element={<Labs/>}/>
                <Route path="/hello" element={<HelloWorld/>}/>
                <Route path="/tuiter/*" element={<Tuiter/>}/>
                <Route path="/todo" element={<TodoList/>}/>

                <Route path="/exam"
                       element={<Exam/>}/>
            </Routes>


        </BrowserRouter>



    </div>

  );
}

export default App;
