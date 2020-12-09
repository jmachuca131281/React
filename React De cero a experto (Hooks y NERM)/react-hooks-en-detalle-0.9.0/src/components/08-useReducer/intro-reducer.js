// Ejemplo de reducer
// Se estabalece el estado inicial

const initialState = [{
  id: 1,
  todo: 'Comprar el pan',
  done: false
}];

// Creando la función pura.

const todoReducer = (state=initialState, action) => {
  if(action?.type === 'agregar'){ // Si la acción no tiene asignación entonces se agrega el ?, para que no genere undefine 
    return [...state, action.payload];
  }
  return state; // Regla: siempre regresa un state.
}

let todos = todoReducer();

// Creamos el nuevo todo

const newTodo = {
  id: 2,
  todo: 'Hacer el desayuno',
  done: false
}

// Crear la acción ya que no se envia el objeto directamente.

const agregarTodo_action = {
  type: 'agregar',
  payload: newTodo
}

// Consumimos la función enviando el state y la acción.

todos = todoReducer(todos, agregarTodo_action);

console.log(todos);