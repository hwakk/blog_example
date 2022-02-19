import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import Data from "./resumeData";
import "./App.css";

function App() {
  const [foo, setFoo] = useState("bar");
  const [resumeData, setResumeData] = useState();

  useEffect(() => {
    // console.log(Data);
    // setResumeData(Data);
  }, []);

  return <div className="App"></div>;
}

export default App;
