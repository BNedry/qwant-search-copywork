import React from "react";
import { observer } from "mobx-react";

import SearchResult from "../SearchResult/SearchResult";

import "./SearchResultList.css";
import { AngleDownIcon } from "react-line-awesome";

export default observer(class SearchResultList extends React.Component {
    render() {
        return (
            <div id="results">
                <div id="results-header">
                    <span id="results-title" class="uppercase">On the web</span>
                    <div id="results-freshness">
                        <span>Freshness</span>
                        <AngleDownIcon />
                    </div>
                </div>
                <div id="results-list">
                    {this.props.search.results.map((data) => <SearchResult className="result" {...data} key={data._id} />)}
                </div>
            </div>
        );
    }
});