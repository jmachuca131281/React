import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import { style } from "./styles.css";
import { useForm } from "../../hooks/useForm";

// const initialState = [
//   {
//     id: new Date().getTime(),
//     desc: "Aprender React",
//     done: false,
//   },
// ];

// useEffect(() => {
//   localStorage.setItem('todos', JSON.stringify(todos));
// }, [todos]);

const init = () => {
  return [
    {
      id: new Date().getTime(),
      desc: "Aprender React",
      done: false,
    },
  ];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init); // Es posible cambiar el "state" por todo ya que el state es posicional.
  // console.log(todos);
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });
  // console.log(description);

  const handleSubmit = (e) => {
    
    e.preventDefault();
    // console.log("Nueva tarea.");
    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      // Metemos el todo en la acción.
      type: "add",
      payload: newTodo,
    };

    dispatch(action); // Envio
    reset();
  };

  const handleDelete = (todoId) => {
    // console.log(todoid);
    const action = {
      type: "delete",
      payload: todoId
    };
    dispatch(action);
  };

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item">
                <p>
                  {i + 1}. {todo.desc}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(todo.id)}>
                  Borrar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              value={description}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Aprender..."
              autoComplete="off"
            ></input>
            <button
              type="submit"
              className="btn btn-outline-primary mt-1 btn-block"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
