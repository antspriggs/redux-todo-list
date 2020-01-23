const initialState = {
  todos: [],
  inputValue: ""
}


export default (prevState = initialState, { type, payload }) => {
  console.log(type, payload);
  let todos = []; // for temp use
  switch (type) {
    case "initializeTodos":
      return { ...prevState, todos: payload };
    case "updateInput":
      return { ...prevState, inputValue: payload };
    case "addTodo":
      if (!prevState.inputValue) return { ...prevState }; // they didn't add anything
      const newTodo = { name: prevState.inputValue, done: false };
      return { todos: [...prevState.todos, newTodo], inputValue: "" };
    case "completeToggle":
      todos = [...prevState.todos];
      todos[payload].done = !todos[payload].done;
      return { ...prevState, todos };
    case "removeTodo":
      todos = [...prevState.todos];
      todos.splice(payload, 1);
      return { ...prevState, todos };
    default:
      return { ...prevState };
  }
}