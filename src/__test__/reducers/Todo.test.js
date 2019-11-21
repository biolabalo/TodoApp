import todoReducer from "../../redux/todoReducer";

const newData = {
  id: "xs8huqo0fp",
  dateCompleted: "",
  isPending: true,
  isCompleted: false,
  dueDate: "2019-11-24",
  title: "dsddsds"
};

const initialState = {
  todos: []
};

const savedState = {
  todos: [
    {
      id: "xs8huqo0fp",
      dateCompleted: "",
      isPending: true,
      isCompleted: false,
      dueDate: "2019-11-24",
      title: "dsddsds"
    }
  ]
};

describe("todoReducer test", () => {
  it("should test for the the initial state", () => {
    expect(todoReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle add todo action", () => {
    expect(
      todoReducer(initialState, { type: "ADD_TODOS", payload: newData })
    ).toEqual({
      todos: [newData]
    });
  });

  it("should handle delete todo action", () => {
    expect(
      todoReducer(initialState, { type: "DELETE_TODO", payload: newData.id })
    ).toEqual({
      todos: []
    });
  });

  it("should handle update todo action", () => {
    expect(
      todoReducer(savedState, {
        type: "UPDATE_TODOS", 
        payload: { id: newData.id, title: "new title" , dueDate: "2019-12-24" }
      })
    ).toEqual({
      todos: [
        {
          id: "xs8huqo0fp",
          dateCompleted: "",
          isPending: true,
          isCompleted: false,
          dueDate: "2019-12-24",
          title: "new title"
        }
      ]
    });
  });
});
