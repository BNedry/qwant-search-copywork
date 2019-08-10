import {observable, action, decorate} from "mobx";
import Qwant from "../api/Qwant";

class Search {
    results = [];

    web(query) {
        Qwant.web(query).then(action("searchWebSuccess", (res) => {
            this.results = res.data.result.items;
        }));
    };

    emptyResults() {
        this.results = [];
    }
};

decorate(Search, {
    results: observable,
    web: action,
    emptyResults: action
})

const search = new Search();

export default search;