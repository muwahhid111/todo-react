import React from "react";
const Forms = (props) => {
  return (
    <div className="Forms">
      <input
        className="inputText"
        type="text"
        value={props.textValue}
        placeholder="Введите текст"
        onChange={(e) => props.setText(e.target.value)}
      />
      <button className="AddText" disabled={!props.textValue}  onClick={() => props.addText()}>
        добавить
      </button>
    </div>
  );
};
export default Forms;
