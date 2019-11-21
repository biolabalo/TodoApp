import React from 'react';
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import EachTodoItem from "./EachTodoItem";

const Completed = ({ history }) => {
  const completedTodos = useSelector(state =>
    state.todos.filter(eachTodo => eachTodo.isCompleted && !eachTodo.isDeleted)
  );

  return (
    <>
      <section>
        <div className="mt-3 mb-2">
          { !completedTodos || !completedTodos.length ? (
            <small>No completed todo's</small>
          ) : (
            <>
            <h3 className="text-center">{completedTodos.length} <span className="ml-2">Completed Todo's</span></h3>
            <ListGroup variant="flush">
              {completedTodos.map(({ id, ...otherTodoProps }) => (
                <EachTodoItem key={id} id={id} {...otherTodoProps} />
              ))}
            </ListGroup>
            </>
          )}
        </div>
      </section>
    </>
  );
};


export default Completed;
