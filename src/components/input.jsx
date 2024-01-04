import { useState } from "react";

function Input() {
  const [todos, setTodos] = useState([{ text: "lorem" }, { text: "Css" }]);
  const [text, setText] = useState("");
  const handlerChange = (e) => {
    setText(e.target.value);
  };
  const handlerBtn = () => {
    setTodos([{ text: text }]);
    setText("");
  };
  return (
    <div className="container">
      {todos.map((todo, index) => {
        return <div key={index}>{todo.text}</div>;
      })}
      <input
        type="text"
        className="border border-gray-100"
        placeholder="text..."
        value={text}
        onChange={(e) => handlerChange(e)}
      />
      <input type="checkbox" checked={true} />
      <button className="btn btn-dark border" onClick={handlerBtn}>
        add
      </button>
      {todos.map((todo) => {
        return <div>{todo.text}</div>;
      })}
    </div>
  );
}
export default Input;
