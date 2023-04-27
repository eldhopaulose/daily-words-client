import { Routes, Route } from "react-router-dom";
import Dic from "./pages/Search";
import WordsD from "./pages/Words";
import "./App.css";
import TabButton from "./components/TabButton";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TabButton />
      <Footer/>
    </div>
  );
}

export default App;
