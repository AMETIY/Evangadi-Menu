import { Component } from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import Menu from "./Components/Menu-List/Menu";


class App extends Component {
  render() {
    return (
      <div className="all-container">
       <Header />
       <Menu />
      </div>
    )
  }
}

export default App;
