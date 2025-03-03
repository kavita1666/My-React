import { render } from "./react-dom.js";
import React from "./react.js";

const h1 = (
  <div className="App" id="App ">
    Hello World
    <p className="hi">hiii</p>
  </div>
);

const div = <div>my name is </div>;

const App = ({props}) => {
    return (
        <div className="App">
          {props.name}
          <p className="hi">hiii</p>
        </div>
      );
}

render(<App name="Kavita" />, document.getElementById("root"));
