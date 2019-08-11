import React from "react";

import SearchInput from "../SearchInput/SearchInput";
import RightButtons from "./RightButtons/RightButtons";

import "./Header.css";
import background from "./header-bg.svg";

const style = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat"
};

export default class Header extends React.Component {
    render() {
        return (
            <header style={style}>
                <SearchInput />
                <RightButtons />
            </header>
        );
    }
}