import React from 'react';

import Header from "./components/Header";

import './App.css';
import SearchResultList from './components/SearchResultList';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="content">
        <SearchResultList query="qwant"/>
      </div>
    </div>
  );
}

export default App;
