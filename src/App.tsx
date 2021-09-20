import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import NavBar from "./components/molecules/NavBar";
import HomePage from "./components/organisms/HomePage";
import ResultsPage from "./components/organisms/ResultsPage";
import BookPage from "./components/organisms/BookPage";

import { googleLogin } from "./utils/googleLogin";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    googleLogin();
  }, []);

  return (
    <div className="App">
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
    </div>
  );
};

export default App;
