import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Typography from "./components/Typography";
import HomePage from "./pages/HomePage";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: #F5E79D;
`

function App() {
  return (
    <StyledContainer>
      <Typography />
      <Router>
<<<<<<< HEAD
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </nav>
=======
>>>>>>> 431442927996b7724b26b83cdbfd98f7465da719

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </StyledContainer>
  );
}

export default App;