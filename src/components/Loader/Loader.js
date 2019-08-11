import React from "react";

import "./Loader.css";

export default class Loader extends React.Component {
    render() {
        return (
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        );
    }
}