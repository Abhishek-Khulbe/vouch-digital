import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/navbar/NavbarComponent";
import MainBody from "./components/mainBody/MainBody";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <MainBody />
    </div>
  );
}

export default App;
