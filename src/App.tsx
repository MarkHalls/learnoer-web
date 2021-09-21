import React, { useEffect, useReducer } from "react";
import { Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { AppProvider } from "./appState";
import { googleLogin } from "./utils/googleLogin";

import NavBar from "./components/molecules/NavBar";
import HomePage from "./components/organisms/HomePage";
import ResultsPage from "./components/organisms/ResultsPage";
import BookPage from "./components/organisms/BookPage";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    googleLogin();
  }, []);

  return (
    <div className="App">
      <AppProvider>
        <QueryClientProvider client={queryClient}>
          <NavBar />
          <Switch>
            <Route path="/results">
              <ResultsPage />
            </Route>
            <Route path="/books/:olid">
              <BookPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </QueryClientProvider>
      </AppProvider>
    </div>
  );
};

export default App;
