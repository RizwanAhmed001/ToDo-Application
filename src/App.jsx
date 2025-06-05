import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import Empty from "./components/Empty";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  function handleAdd(addItem) {
    if (addItem === "") {
      return;
    } else {
      let newList = [...todoItems, addItem];
      setTodoItems(newList);
    }
  }

  function handleDelete(deleteItem){
    let itemListAfterDelete = todoItems.filter((item) => {
      return item !== deleteItem
    })
    setTodoItems(itemListAfterDelete)
  }

  function handleEdit(editValue){
    let editedData = todoItems.filter((item) => {
      return item !== editValue;
    })
    setTodoItems(editedData)
  }

  return (
    <>
      <Header />
      <div className="container">
        <ToDoList data={todoItems} handleEdit={handleEdit} handleAdd={handleAdd} handleDelete={handleDelete} />
        <Empty data={todoItems} />
      </div>
    </>
  );
}
export default App;
