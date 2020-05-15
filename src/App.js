import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import HomePage from "./components/organisms/HomePage";
import ResultsPage from "./components/organisms/ResultsPage";
// import BookPage from "./components/organisms/BookPage";

import reducer from "./reducers";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Switch>
          <Route path="/results">
            <ResultsPage />
          </Route>
          {/* <Route path="/books">
            <BookPage />
          </Route> */}
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
