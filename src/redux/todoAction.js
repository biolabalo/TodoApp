export const addTodo = (data, dispatch, history) => {
    dispatch({ type: "ADD_TODOS", payload: data });
    return history.push("/");
  };
  
  export const markTodoAsCompleted = (id, dispatch, isCompleted) => {
    // eslint-disable-next-line no-lone-blocks
    {
      isCompleted
        ? dispatch({ type: "MARK_TODO_AS_UNCOMPLETED", payload: id })
        : dispatch({ type: "MARK_TODO_AS_COMPLETED", payload: id });
    }
  };
  
  export const deleteTodoRedux = (id, dispatch) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  
  export const updateTodoRedux = (data, dispatch, history) => {
    dispatch({ type: "UPDATE_TODOS", payload: data });
    return history.push("/");
  };
  
  export const restoreTodoRedux = (id, dispatch) => {
    dispatch({ type: "RESTORE_TODO", payload: id });
  };
  