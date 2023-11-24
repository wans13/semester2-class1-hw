import { useState } from "react";
import "./App.css";

export function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([
    { text: "wake up", done: false },
    { text: "wake up", done: false },
    { text: "wake up", done: false },
    { text: "wake up", done: false },
    { text: "wake up", done: false },
    { text: "wake up", done: false },
    { text: "wake up", done: false },
    { text: "wake up", done: false },
    { text: "wake up", done: false },
    { text: "wake up", done: false },
  ]);
  function handleOnChange(e) {
    setInput(e.target.value);
  }
  function handleAddEntry() {
    if (input === "") return;
    const copy = [...list];
    copy.push({ text: input, done: false });
    setList(copy);
    setInput("");
  }
  function handleDeleteEntry(index: number) {
    const copy = [...list];
    copy.splice(index, 1);
    setList(copy);
  }
  function handleMarkComplete(index: number) {
    const copy = [...list];
    copy[index].done = true;
    setList(copy);
  }
  function handleMarkIncomplete(index: number) {
    const copy = [...list];
    copy[index].done = false;
    setList(copy);
  }
  return (
    <div>
      <h1>Obligatory list replica number 2 (from scratch)</h1>
      {list.map((value, index) => {
        if (list[index].done == true) {
          return (
            <p>
              <s>
                {list[index].text}
                <button
                  onClick={() => {
                    handleDeleteEntry(index);
                  }}
                >
                  Delete entry
                </button>
                <button
                  onClick={() => {
                    handleMarkIncomplete(index);
                  }}
                >
                  Mark Incomplete
                </button>
              </s>
            </p>
          );
        }
        return (
          <p>
            {list[index].text}
            <button
              onClick={() => {
                handleDeleteEntry(index);
              }}
            >
              Delete entry
            </button>
            <button
              onClick={() => {
                handleMarkComplete(index);
              }}
            >
              Mark Complete
            </button>
          </p>
        );
      })}
      <input type="text" value={input} onChange={handleOnChange} />
      <button onClick={handleAddEntry}>Add entry</button>
    </div>
  );
}
