import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import Homepage from "./components/Homepage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <Homepage />
      </div>
    </>
  );
}

export default App;
