import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/"></Route>
              {/* chat */}
            </Routes>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

export default App;
