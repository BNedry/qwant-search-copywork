import React from "react";
import { observer } from "mobx-react";
import { AngleDownIcon } from "react-line-awesome";

import SearchResult from "../SearchResult/SearchResult";
import Loader from "../Loader/Loader";

import "./SearchResultList.css";

export default observer(class SearchResultList extends React.Component {
    render() {
        return (
            <div id="results">
                <div id="results-header">
                    <span id="results-title" className="uppercase">On the web</span>
                    <div id="results-freshness">
                        <span>Freshness</span>
                        <AngleDownIcon />
                    </div>
                </div>
                <div id="results-list">
                    {this.props.search.isLoading ? <Loader /> : this.props.search.results.map((data) => (<SearchResult className="result" {...data} key={data._id} />))}
                </div>
            </div>
        );
    }
});