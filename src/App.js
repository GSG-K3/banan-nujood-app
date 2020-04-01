import React from "react";
import "./App.css";
import Results from "./components/results";
import MainPage from "./components/main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InputForm />
        <MainPage />
      </header>
    </div>
  );
}

export default App;
