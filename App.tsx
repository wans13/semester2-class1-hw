import { useState } from "react";
import "./App.css";

export function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([
    { text: "banana", done: false },
    { text: "banana", done: false },
    { text: "banana", done: false },
    { text: "banana", done: false },
    { text: "banana", done: false },
    { text: "banana", done: false },
  ]);
  function handleInputChange(e) {
    setInput(e.target.value);
  }
  function handleAdd() {
    if (input === "") return;
    const copy = [...list];
    copy.push({ text: input, done: false });
    setList(copy);
    setInput("");
  }
  function handleDelete(index: number) {
    const copy = [...list];
    copy.splice(index, 1);
    setList(copy);
  }
  function handleDone(index: number) {
    const copy = [...list];
    copy[index].done = true;
    setList(copy);
  }
  function handleUndone(index: number) {
    const copy = [...list];
    copy[index].done = false;
    setList(copy);
  }
  return (
    <div>
      <h1>banana list</h1>
      {list.map(function (value, index) {
        if (list[index].done == true) {
          return (
            <s>
              {list[index].text}{" "}
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                delete
              </button>
              <button
                onClick={() => {
                  handleUndone(index);
                }}
              >
                not done
              </button>
            </s>
          );
        }
        return (
          <p>
            {list[index].text}{" "}
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              delete
            </button>
            <button
              onClick={() => {
                handleDone(index);
              }}
            >
              Done
            </button>
          </p>
        );
      })}
      <input type="text" onChange={handleInputChange} value={input} />
      <button onClick={handleAdd}>add</button>
    </div>
  );
}
