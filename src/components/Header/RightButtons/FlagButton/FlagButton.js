import React from "react";

import Flag from "../../../Flag/Flag";

import "./FlagButton.css";

export default class FlagButton extends React.Component {
    render() {
        return (
            <button>
                <Flag code={this.props.code} />
                <span class="text">{this.props.code}</span>
            </button>
        );
    }
}