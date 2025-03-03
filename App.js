import { render } from "./react-dom.js";
import React from "./react.js";

const h1 = (
  <div>
    Hello World<p>hiii</p>
  </div>
);

render(h1, document.getElementById("root"));
