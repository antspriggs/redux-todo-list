import React from "react";
import { useSelector, useDispatch } from "react-redux"
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function TodoApp() {

  const { todos, inputValue } = useSelector(state => state)
  const dispatchTodoState = useDispatch();

  React.useEffect(() => {
    console.log("useEffect :: initial");
    const LStodos = localStorage.getItem("todos");
    if (LStodos)
      dispatchTodoState({
        type: "initializeTodos",
        payload: JSON.parse(LStodos)
      });
  }, []);

  React.useEffect(() => {
    console.log("useEffect :: todos has updated");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatchTodoState({ type: "addTodo" });
  }

  //
  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h2 className="nes-text is-primary" style={{ float: "left" }}>
        NES ToDo{" "}
      </h2>
      <i className="nes-icon trophy is-small" style={{ float: "right" }} />
      <TodoForm
        value={inputValue}
        onSubmit={handleSubmit}
        onChange={e =>
          dispatchTodoState({ type: "updateInput", payload: e.target.value })
        }
      />
      <ul className="nes-list is-circle">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            remove={() =>
              dispatchTodoState({ type: "removeTodo", payload: index })
            }
            completeToggle={() =>
              dispatchTodoState({ type: "completeToggle", payload: index })
            }
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
