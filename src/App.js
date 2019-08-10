import React from 'react';

import Header from "./components/Header/Header";
import SearchResultList from './components/SearchResultList/SearchResultList';

import search from "./store/Search";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="content">
        <SearchResultList search={search}/>
      </div>
    </div>
  );
}

export default App;
