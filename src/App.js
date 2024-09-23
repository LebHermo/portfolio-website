// import logo from "./logo.svg";
import "./App.css";
// import styles from "./index.css";
import Navmenu from "./components/Navmenu";

function App() {
  return (
    <div className="App flex bg-bgdarkgray">
      <Navmenu />
      <div className="w-screen px-12 pt-24">
        <h1 className="text-textlight text-5xl font-semibold">Hello Everyone! Puryagaba mong tanan.</h1>
      </div>
    </div>
  );
}

export default App;
