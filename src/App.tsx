import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";

import Homepage from "./components/Homepage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <Homepage />
        <Analytics />
      </div>
    </>
  );
}

export default App;
