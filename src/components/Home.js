import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import EachTodoItem from "./EachTodoItem";

const Home = () => {
  const pendingTodos = useSelector(state =>
    state.todos.filter(eachTodo => eachTodo.isPending && !eachTodo.isDeleted)
  );

  return (
    <>
      <section className="pending_todos">
        <div className="mt-3 mb-2">
          {!pendingTodos || !pendingTodos.length ? (
            <small>No pending todo's</small>
          ) : (
            <>
<h3 className="text-center">{pendingTodos.length} <span className="ml-2">Pending Todo's</span></h3>
            <ListGroup variant="flush">
              {pendingTodos.map(({ id, ...otherTodoProps }, index) => (
                <EachTodoItem 
                 key={index}
                 id={id} 
                 {...otherTodoProps} />
              ))}
            </ListGroup>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
