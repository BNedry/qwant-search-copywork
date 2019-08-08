import React from "react";

import { CloseIcon, SearchIcon, HeartOIcon } from "react-line-awesome";

import "./SearchInput.css";

export default class SearchInput extends React.Component {
    render() {
        return (
            <div id="search-input">
                <HeartOIcon id="search-logo"/>
                <input></input>
                <CloseIcon id="search-erase"/>
                <SearchIcon id="search-button" />
            </div>
        )
    }
}