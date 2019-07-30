import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import Conversation from './components/Conversation';


const GlobalStyles = createGlobalStyle`
  html, body, #root, .App {
    height: 100%;
  }
  html {
    background-color: #eeeeee;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
  }
  body {
    background-color: #ffffff;
    width: 61.2rem;
    margin: 0 auto;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Conversation />  
    </div>
  );
}

export default App;
