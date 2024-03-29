import formatDate from "../dateUtil";

const initialState = {
  todos: [ ]
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TODOS":
      return {
        ...state,
        todos: [payload, ...state.todos]
      };
    case "MARK_TODO_AS_COMPLETED":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? {
                ...todo,
                isPending: false,
                isCompleted: true,
                dateCompleted: formatDate(new Date())
              }
            : todo
        )
      };
    case "MARK_TODO_AS_UNCOMPLETED":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? {
                ...todo,
                isPending: true,
                isCompleted: false,
                dateCompleted: ""
              }
            : todo
        )
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, isDeleted: true } : todo
        )
      };
    case "RESTORE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, isDeleted: false } : todo
        )
      };
    case "UPDATE_TODOS":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? {
                ...todo,
                title: action.payload.title,
                dueDate: action.payload.dueDate
              }
            : todo
        )
      };
    default:
      return state;
  }
}
