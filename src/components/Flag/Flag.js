import React from "react";

import "../../../node_modules/flag-icon-css/css/flag-icon.css";

export default class Flag extends React.Component {
    render() {
        return (
            <span className={`flag-icon flag-icon-${this.props.code} ${this.props.squared ? "flag-icon-squared" : ""}`}></span>
        );
    }
}