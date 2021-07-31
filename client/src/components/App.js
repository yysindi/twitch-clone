import React from "react";
import { Router, Route } from "react-router-dom";
import Header from "./Header";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import history from "../history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div className="ui container">
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/show/:id" exact component={StreamShow} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/create" exact component={StreamCreate} />
        </div>
      </Router>
    </div>
  );
};

export default App;
