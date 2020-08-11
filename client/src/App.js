import React from "react";
import AppNavbar from "./components/AppNavBar";
import TodoList from "./components/TodoList";
import ItemModal from "./components/ItemModal";

import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <AppNavbar />
        <Container>
          <ItemModal />
          <TodoList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
