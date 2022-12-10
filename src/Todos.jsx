import React from "react";
const Todos = ({ deleted, makeFavorite, handleRemove }) => {
  return deleted.map((item, index) => {
    return (
      <div className="TodoList">
        <div className={`todo ${item.favorite ? "selected" : ""}`}>
          <div className="Fovorite">
            <button onClick={() => makeFavorite(index)}> ★</button>
          </div>
          <div className="Text"> {item.text}</div>
          <div>
            <button className="Delete" onClick={() => handleRemove(index)}>
              🗑
            </button>
          </div>
        </div>
      </div>
    );
  });
};
export default Todos;
