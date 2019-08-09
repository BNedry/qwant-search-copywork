import React from "react";

import SearchResult from "./SearchResult";

import "./SearchResultList.css";

import Qwant from "../api/Qwant";

export default class SearchResultList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        Qwant.web(this.props.query).then((res) => {
            this.setState({
                items: res.data.result.items
            });
        });
    }

    render() {
        return (
            <div id="results">
                {this.state.items.map((data) => <SearchResult className="result" {...data} key={data._id} />)}
            </div>
        );
    }
}