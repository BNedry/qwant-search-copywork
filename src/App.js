import React from 'react';

import Header from "./components/Header/Header";
import SearchResultList from './components/SearchResultList/SearchResultList';
import Sidebar from './components/Sidebar/Sidebar';

import search from "./store/Search";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="wrapper">
        <Sidebar />
        <SearchResultList search={search}/>
      </div>
    </div>
  );
}

export default App;
