import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";

import { addTodo, updateTodoRedux } from "../redux/todoAction";

const CreateTodos = ({
  history,
  match: {
    params: { todoID }
  },
  match
}) => {
  let singleTodoId = todoID ? todoID : null;

  const singleTodo = useSelector(state =>
    state.todos.filter(eachTodo => eachTodo.id === singleTodoId)
  )[0];

  const [formData, setFormData] = useState(
    singleTodo
      ? { dueDate: singleTodo.dueDate, title: singleTodo.title }
      : { dueDate: "", title: "" }
  );
  const { title, dueDate } = formData;

  const dispatch = useDispatch();

  const submitTodo = e => {
    e.preventDefault();

    const data = {
      id: Math.random()
        .toString(36)
        .substr(2, 10),
      dateCompleted: "",
      isPending: true,
      isCompleted: false,
      dueDate,
      title
    };

    setFormData({ dueDate: "", title: "" });

    addTodo(data, dispatch, history);
  };

  const updateTodo = e => {
    e.preventDefault();

    const data = { ...formData, id: singleTodo.id };

    setFormData({ dueDate: "", title: "" });

    updateTodoRedux(data, dispatch, history);
  };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  if (match.params.todoID && !singleTodo) {
    return (
      <>
        <section>
          <h1 className="text-center"> PAGE NOT FOUND</h1>
          <div className="mt-3 mb-2"></div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section>
          <h3 className="text-center">
            {" "}
            {singleTodo ? "Edit Todo" : "Create Todos"}{" "}
          </h3>
          <div className="mt-3 mb-2">
            <Form onSubmit={singleTodo ? updateTodo : submitTodo}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Enter todo</Form.Label>
                <Form.Control
                  onChange={e => onChange(e)}
                  name="title"
                  value={title}
                  type="text"
                  placeholder="Enter todo"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Due date </Form.Label>
                <Form.Control
                  onChange={e => onChange(e)}
                  type="date"
                  name="dueDate"
                  value={dueDate}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                {singleTodo ? "Update Todo" : "Submit"}
              </Button>
            </Form>
          </div>
        </section>
      </>
    );
  }
};

export default CreateTodos;
