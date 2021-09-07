import { SeHeading } from "./components";
import { useMyState } from "./hooks";

import logo from "./logo.svg";

import "./App.css";

function App() {
  const [state, setState] = useMyState("Hello");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SeHeading>{state}</SeHeading>
        <button onClick={() => setState("Bye!!")}>Change Greeting</button>
      </header>
    </div>
  );
}

export default App;
