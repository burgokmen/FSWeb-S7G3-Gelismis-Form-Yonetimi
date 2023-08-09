import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormMaker from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Form Example</h1>
        </div>
        <div>
          <FormMaker />
        </div>
      </header>
    </div>
  );
}

export default App;
