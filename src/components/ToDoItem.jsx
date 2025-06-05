import { FaDeleteLeft } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
function TodoItem({data, index, handleDelete, handleAllEdit}) {
  let [marker, setMarker] = useState(false);

  function handleMarker(){
    setMarker(!marker)
  }

  return (
    <>
      <div key={index} className="cont-item">
        <div  className="left">
          <input onClick={handleMarker} className="marker" id={Date.now()} type="checkbox" />
          <label htmlFor={Date.now()}>
            <h4 className={`itemName ${marker === true ? "mark" : null}`}>
              {data}
            </h4>
          </label>
        </div>

        <div className="right">
          <button onClick={() => handleAllEdit(data)} className="edit-btn">
            <FaEdit />
          </button>
          <button onClick={() => handleDelete(data)} className="delete-btn">
            <FaDeleteLeft />
          </button>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
