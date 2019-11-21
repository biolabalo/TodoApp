import React, { Suspense, lazy  } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TabNavigation from "./components/TabNavigation";
import Home from "./components/Home";
import { Spinner} from "react-bootstrap";


 const Completed = lazy(()=> import("./components/Completed"));
 const Trash = lazy(()=> import("./components/Trash"));
 const CreateTodos = lazy(()=> import("./components/CreateTodos"));


function App() {
  return (
   
    <Router>
      <TabNavigation/>
      <div className="component-container">
      <Suspense fallback={<Spinner animation="grow" />}>
      <Switch>  
        <Route exact path="/" component={Home} />
        <Route exact path="/Completed" component={Completed} />
        <Route exact path="/Trash" component={Trash} />
        <Route exact path="/Add" component={CreateTodos} />
        <Route exact path="/edit-todo/:todoID" component={CreateTodos} />
      </Switch>
      </Suspense>
      </div>
  </Router>

);
}

export default App;
