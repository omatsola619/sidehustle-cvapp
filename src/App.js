import React from "react";
import Details from "./components/Details";
import EducationInfo from "./components/EducationInfo";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Summary from "./components/Summary";
import './components/Styles.css';

function App() {
  return (
    <div>
      <Header />
      <div class="container">
        <Details />
        <Summary />
        <EducationInfo />
        <Experience />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
