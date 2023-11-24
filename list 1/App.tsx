import { useState } from "react";

export function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([
    { value: "number one", done: false },
    { value: "number two", done: false },
    { value: "number three", done: false },
  ]);
  function handleAddName() {
    if (input === "") return;
    const copy = [...list];
    copy.push({ value: input, done: false });
    setList(copy);
    setInput("");
  }
  function handleOnChange(e) {
    setInput(e.target.value);
  }
  function handleDeleteItem(index: number) {
    const copy = [...list];
    copy.splice(index, 1);
    setList(copy);
  }
  function handleMarkFinished(index: number) {
    const copy = [...list];
    copy[index].done = true;
    setList(copy);
  }
  function handleMarkUnfinished(index: number) {
    const copy = [...list];
    copy[index].done = false;
    setList(copy);
  }
  return (
    <div>
      <h1>Obligatory list replication from scratch</h1>
      {list.map((value, index) => {
        if (list[index].done == true) {
          return (
            <p>
              <s>
                {list[index].value}
                <button
                  onClick={() => {
                    handleDeleteItem(index);
                  }}
                >
                  Delete item
                </button>
                <button
                  onClick={() => {
                    handleMarkUnfinished(index);
                  }}
                >
                  Mark unfinished
                </button>
              </s>
            </p>
          );
        }
        return (
          <p>
            {list[index].value}
            <button
              onClick={() => {
                handleDeleteItem(index);
              }}
            >
              Delete item
            </button>
            <button
              onClick={() => {
                handleMarkFinished(index);
              }}
            >
              Mark finished
            </button>
          </p>
        );
      })}
      <input type="text" onChange={handleOnChange} value={input} />
      <button onClick={handleAddName}>Add to list</button>
    </div>
  );
}
