import React from "react";

import "./SidebarItem.css";

export default class SidebarItem extends React.Component {
    render() {
        return (
            <>
                <div className={`sidebar-item ${this.props.active ? "active" : ""}`}>
                    {this.props.active ? <div className="sidebar-active_bar"></div> : undefined}
                    {this.props.icon}
                    <span>{this.props.label}</span>
                </div>
            </>
        );
    }
}