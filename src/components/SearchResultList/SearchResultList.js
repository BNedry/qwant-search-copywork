import React from "react";
import { observer } from "mobx-react";

import SearchResult from "../SearchResult/SearchResult";

import "./SearchResultList.css";

export default observer(class SearchResultList extends React.Component {
    render() {
        return (
            <div id="results">
                {this.props.search.results.map((data) => <SearchResult className="result" {...data} key={data._id} />)}
            </div>
        );
    }
});