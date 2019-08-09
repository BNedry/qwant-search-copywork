import React from "react";

import * as createDOMPurify from "dompurify";

import "./SearchResult.css";

const DOMPurify = createDOMPurify(window);
DOMPurify.setConfig({
    ALLOWED_TAGS: ['b']
});

export default class SearchResult extends React.Component {
    render() {
        return (
            <>
                <h3><a href={this.props.url} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.props.title)}}></a></h3>
                <span className="result-source" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.props.source)}}></span>
                <p className="result-desc" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.props.desc)}}></p>
            </>
        );
    }
}