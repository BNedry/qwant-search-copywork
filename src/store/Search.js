import {observable, action, decorate} from "mobx";
import Qwant from "../api/Qwant";

class Search {
    results = [];
    isLoading = false;

    web(query) {
        Qwant.web(query).then(action("searchWebSuccess", (res) => {
            this.results = res.data.result.items;
        })).finally(action("searchWebFinally", () => {
            this.isLoading = false;
        }));
        this.isLoading = true;
    };

    emptyResults() {
        this.results = [];
    }
};

decorate(Search, {
    results: observable,
    isLoading: observable,
    web: action,
    emptyResults: action
})

const search = new Search();

export default search;