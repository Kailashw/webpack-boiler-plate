import React from "react";
import { render } from "react-dom";
import dotenv from 'dotenv'
import Routes from "./routes/routes";
dotenv.config()

import Header from './components/Header'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}


render(<App>
  <Routes />
</App>, document.getElementById("app"));
