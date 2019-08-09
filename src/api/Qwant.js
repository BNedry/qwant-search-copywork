import * as request from "request-promise-native";

const BASE_URL = "https://api.qwant.com/org/search/";
const WEB_URL = `${BASE_URL}web`;

export default class Qwant {
    /**
     * 
     * @param String query 
     * @param Object options
     * {
     *      count: 10,
     *      t: "web",
     *      device: "desktop",
     *      safesearch: true,
     *      locale: "en_gb",
     *      uiv: 4
     * } 
     */
    static web(query, options = {}) {
        const safesearch = options.safesearch || true;
        const qs = {
            count: options.count || 10,
            q: query,
            t: options.t || "web",
            device: options.device || "desktop",
            safesearch: safesearch ? 1 : 0,
            locale: options.locale || "en_gb",
            uiv: options.uiv || 4
        };
        return request({
            uri: WEB_URL,
            qs,
            json: true
        });
    }
}