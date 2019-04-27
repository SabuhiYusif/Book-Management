import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MainPage from './main_page/components/MainPage';
import {Provider} from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MainPage />
        </div>
      </Provider>
    );
  }
}

export default App;
