import React from "react";
import { observer } from "mobx-react";

import "./RightPanel.css";

export default observer(class RightPanel extends React.Component {
    render() {
        return (

            <div className={`panel-wrapper ${this.props.rightPanel.isOpen ? "" : "hidden"}`}>
                <div
                    className="panel-opaque"
                    style={{ opacity: this.props.rightPanel.isOpen ? 0.98 : 0 }}
                    onClick={() => { this.props.rightPanel.close() }}
                >
                </div>
                <div
                    className="panel-right"
                    style={{ width: this.props.rightPanel.isOpen ? 460 : 0 }}
                >
                </div>
            </div>
        );
    }
});