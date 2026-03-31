import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import Todoitem1 from "./components/TodoItem1";
import Todoitem2 from "./components/Todoitem2";
import "./index.css";
function App() {
  return (
    <div className="todo-container text-center">
      <AppName />
      <AddToDo />
      <div className="item-cont">
         <Todoitem1 />
     <Todoitem2></Todoitem2>
      </div>
     
    </div>
  );
}

export default App;