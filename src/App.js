import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MainPage from './main_page/components/MainPage';
import {Provider} from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddBook from './main_page/components/newBook/AddBook';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/addBook" component={AddBook} />
            <Route exact path="" component={MainPage} />
            {/* <MainPage /> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
