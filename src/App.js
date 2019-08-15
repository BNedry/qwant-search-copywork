import React from 'react';
import { observer } from "mobx-react";

import Header from "./components/Header/Header";
import SearchResultList from './components/SearchResultList/SearchResultList';
import Sidebar from './components/Sidebar/Sidebar';
import RightPanel from './components/RightPanel/RightPanel';

import search from "./store/Search";
import rightPanel from "./store/RightPanel";

import './App.css';

export default observer(function App() {
  return (
    <div className="App">
      <Header />
      <div id="wrapper">
        <Sidebar />
        <SearchResultList search={search}/>
      </div>
      <RightPanel rightPanel={rightPanel}/>
    </div>
  );
});
