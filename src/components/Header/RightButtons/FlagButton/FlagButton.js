import React from "react";

import Flag from "../../../Flag/Flag";

import rightPanel from "../../../../store/RightPanel";

import "./FlagButton.css";

export default class FlagButton extends React.Component {
    render() {
        return (
            <button onClick={() => {rightPanel.open()}}>
                <Flag code={this.props.code} />
                <span className="text">{this.props.code}</span>
            </button>
        );
    }
}