import React from 'react';

import Header from "./components/Header";
import SearchResult from "./components/SearchResult";

import './App.css';

const searchResultData = {
  title: "<b>Qwant</b> - Le moteur de recherche qui respecte votre vie privée",
  url: "https://www.qwant.com/?l=fr",
  source: "https://www.<b>qwant</b>.com/?l=fr",
  desc: "<b>Qwant</b> est un moteur de recherche qui respecte votre vie privée tout en facilitant la découverte et le partage grâce à une approche sociale."
}

function App() {
  return (
    <div className="App">
      <Header />
      <div id="content">
        <SearchResult {...searchResultData}/>
      </div>
    </div>
  );
}

export default App;
