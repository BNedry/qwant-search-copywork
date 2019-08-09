import React from "react";

import SearchInput from "./SearchInput";

import "./Header.css";
import background from "../img/header-bg.svg";

const style = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat"
};

export default class Header extends React.Component {
    render() {
        return (
            <header style={style}>
                <SearchInput />
            </header>
        );
    }
}