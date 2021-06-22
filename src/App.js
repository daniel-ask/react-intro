import "./App.css";
import { Nav, Footer } from "./Nav";
import Home from "./Home";
import Away from "./Away";
import { useState } from "react";

function App() {
  let [page, setPage] = useState("Home");

  function changePage(newPage) {
    console.log(newPage);
    setPage(newPage);
  }

  return (
    <div className="App">
      <Nav changePage={changePage} className="new-class" coolNumber={5} />
      {page === "Home" ? <Home /> : <Away />}
      <Footer />
    </div>
  );
}

export default App;
