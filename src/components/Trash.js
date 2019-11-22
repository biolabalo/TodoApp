import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import EachTodoItem from "./EachTodoItem";

const Trash = () => {
  const deletedTodos = useSelector(state =>
    state.todos.filter(eachTodo => eachTodo.isDeleted)
  );

  return (
    <>
      <section>
        <div className="mt-3 mb-2">
          {!deletedTodos || !deletedTodos.length ? (
            <small>No Deleted todo's</small>
          ) : (
            <>
              <h3 className="text-center">
                {deletedTodos.length}{" "}
                <span className="ml-2">Deleted Todo's</span>
              </h3>
              <ListGroup variant="flush">
                {deletedTodos.map(({ id, ...otherTodoProps }, index) => {
                  return (
                    <EachTodoItem key={index} id={id} {...otherTodoProps} />
                  );
                })}
              </ListGroup>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Trash;
