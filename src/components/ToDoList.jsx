import { CiViewList } from "react-icons/ci";
import ToDoItem from "./ToDoItem";
import { useState } from "react";
function ToDoList({ data, handleAdd, handleDelete, handleEdit}) {

  let [userInput, setUserInput] = useState("")
  let [newData, setNewData] = useState(data)

  function handleChange(event){
    setUserInput(event.target.value)
  }

  function handleAll(){
    handleAdd(userInput)
    setUserInput("")
  }

  function handleAllEdit(editValue){
    setUserInput(editValue)
    handleEdit(editValue)
  }


  return (
    <>
      <h2 className="container-heading">
        To-Do List{" "}
        <span className="icon">
          <CiViewList />
        </span>
      </h2>
      <div className="search">
        <input value={userInput} onChange={(event) => handleChange(event)} className="input" type="text" placeholder="Add Your Task..." />
        <button onClick={handleAll} className="btn">Add</button>
      </div>

      <div className="body">
        {data.map((item, index) => {
          return <ToDoItem handleAllEdit={handleAllEdit} handleDelete={handleDelete} key={index} data={item} />;
        })}
      </div>
    </>
  );
}
export default ToDoList;
