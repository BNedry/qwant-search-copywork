import React from "react";
import { CloseIcon, SearchIcon, HeartOIcon } from "react-line-awesome";

import search from "../../store/Search";

import "./SearchInput.css";

export default class SearchInput extends React.Component {
    constructor(props) {
        super(props);

        this.input = React.createRef();

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleEraseClick = this.handleEraseClick.bind(this);
    }
    
    handleKeyPress(e) {
        if (e.key === "Enter") {
            const input = this.input.current;
            search.web(input.value);
            input.blur();
        } 
    }

    handleSearchClick() {
        search.web(this.input.current.value);
    }

    handleEraseClick() {
        const input = this.input.current;
        input.value= "";
        input.focus();
        search.emptyResults();
    }
    
    render() {
        return (
            <div id="search-input">
                <HeartOIcon id="search-logo"/>
                <input onKeyPress={this.handleKeyPress} ref={this.input}></input>
                <CloseIcon id="search-erase" onClick={this.handleEraseClick}/>
                <SearchIcon id="search-button" onClick={this.handleSearchClick}/>
            </div>
        )
    }
}