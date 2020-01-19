import React from 'react';
import './App.css';
import Tasks from "./components/Task/Tasks";
import { Container } from "semantic-ui-react";

function App() {
  return (
      <Container>
            <Tasks/>
      </Container>
  );
}

export default App;
