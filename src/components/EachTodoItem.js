import React, { memo } from "react";
import { ListGroup, Form, Badge } from "react-bootstrap";
import { faPencilAlt, faTrash, faRecycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { markTodoAsCompleted, deleteTodoRedux, restoreTodoRedux } from "../redux/todoAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const EachTodoItem = memo(({ id, title, dueDate, isCompleted, isDeleted, dateCompleted }) => {

  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    deleteTodoRedux(id, dispatch);
  }
  const markAsCompleted = (id,isCompleted) => {
    markTodoAsCompleted(id, dispatch,isCompleted);
  };

  const truncateString = (str) => {
    if (str.length <= 30) {
      return str
    }
    return str.slice(0, 30) + '...'
  }

  const restoreTodo = (id) => {
    restoreTodoRedux(id, dispatch)
  }

  return (
    <ListGroup.Item>
      <div className="row no-gutters">
        <div className="col-md-4">
          <Form.Check
            inline
            label={truncateString(title)}
            type="checkbox"
            id={id}
            
            onChange={() =>  markAsCompleted(id,isCompleted)}
           checked={ isCompleted ? true : false}
          />
        </div>
        <div className="col-md-6">
          <span className="icons-fontawesome">
            <Badge pill variant="warning" className="mr-2">
              Due Date: {dueDate}
            </Badge>
            { dateCompleted ?  <Badge pill variant="success">
              Dated Completed: {dateCompleted}
            </Badge> : ""}
          </span>
        </div>
        <div className="col-md-2">
          <span className="icons-fontawesome">
            <Link to={`/edit-todo/${id}`}><FontAwesomeIcon icon={faPencilAlt} className="mr-2" /></Link>
 {isDeleted ? <FontAwesomeIcon 
            icon={faRecycle} 
            className="ml-2 mr-2"
            onClick={()=> restoreTodo(id)} /> : <FontAwesomeIcon 
            icon={faTrash} 
            className="ml-2 mr-2"
            onClick={()=> deleteTodo(id)} />}
          </span>
        </div>
      </div>
    </ListGroup.Item>
  );
});

export default EachTodoItem;
