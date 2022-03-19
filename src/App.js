import React, { Component } from "react";
import "./StaffListComponent/css/App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./StaffListComponent/Home";
import { ConfigStore } from "./StaffListComponent/redux/ConfigStore";

const store = ConfigStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Home />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
