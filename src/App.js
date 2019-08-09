import React from 'react';

import Header from "./components/Header";
import SearchResult from "./components/SearchResult";

import './App.css';

const searchResult = [
  {
    "title": "<b>Qwant</b> - The search engine that respects your privacy",
    "favicon": "//s.qwant.com/fav/q/w/www_qwant_com.ico",
    "url": "https://www.qwant.com/",
    "source": "https://www.<b>qwant</b>.com",
    "desc": "<b>Qwant</b> is a search engine that respects your privacy and eases discovering and sharing via a social approach.",
    "_id": "ac5a7b1b9d83dff67fa3f21af60aacc0",
    "score": 0,
    "position": 1
  },
  {
    "title": "<b>Qwant</b> - Wikipedia",
    "favicon": "//s.qwant.com/fav/w/i/en_wikipedia_org.ico",
    "url": "https://en.wikipedia.org/wiki/Qwant",
    "source": "https://en.wikipedia.org/wiki/<b>Qwant</b>",
    "desc": "<b>Qwant</b> is a French web search engine, launched in July 2013 and operated from Paris. It claims not to employ user tracking and doesn't personalize search results in order to avoid trapping users in a filter bubble. It is available in 13 languages.",
    "_id": "f6c320bb20001c246c36772ec41d66be",
    "score": 0,
    "position": 2
  },
  {
    "title": "‎<b>Qwant</b> on the App Store - apps.apple.com",
    "favicon": "//s.qwant.com/fav/a/p/apps_apple_com.ico",
    "url": "https://apps.apple.com/us/app/qwant/id924470452",
    "source": "https://apps.apple.com/us/app/<b>qwant</b>/id924470452",
    "desc": "*** The search engine that respects your privacy has a new design Enjoy the first European search engine directly on your mobile phone. <b>Qwant</b> gives you a neutral access to the whole Web, the last news and social media content.",
    "_id": "a85db9693b9cf62b79f122571894f0fb",
    "score": 0,
    "position": 3
  },
  {
    "title": "<b>Qwant</b> - Privacy &amp; Ethics - Apps on Google Play",
    "favicon": "//s.qwant.com/fav/g/o/play_google_com.ico",
    "url": "https://play.google.com/store/apps/details?id=com.qwant.liberty&hl=en_US",
    "source": "https://play.google.com/store/apps/details?id=com.<b>qwant</b>.liberty",
    "desc": "The search engine that respects your privacy has a new design! Enjoy the first European search engine directly on your mobile phone. <b>Qwant</b> gives you a neutral access to the whole Web, the last news and social media content.",
    "_id": "505e81430e2d69445f229520b6a55cb8",
    "score": 0,
    "position": 4
  },
  {
    "title": "<b>Qwant</b> - Le moteur de recherche qui respecte votre vie privée",
    "favicon": "//s.qwant.com/fav/q/w/www_qwant_com.ico",
    "url": "https://www.qwant.com/?l=fr",
    "source": "https://www.<b>qwant</b>.com/?l=fr",
    "desc": "<b>Qwant</b> est un moteur de recherche qui respecte votre vie privée tout en facilitant la découverte et le partage grâce à une approche sociale.",
    "_id": "3123db81b57fb3b154fc0ac35d54e8ea",
    "score": 0,
    "position": 5
  },
  {
    "title": "On Microsoft Edge - <b>Qwant</b> Help Center",
    "favicon": "//s.qwant.com/fav/q/w/help_qwant_com.ico",
    "url": "https://help.qwant.com/help/qwant-search/add-qwant-on-desktop/on-microsoft-edge/",
    "source": "https://help.<b>qwant</b>.com/help/<b>qwant</b>-search/add-<b>qwant</b>-on-desktop/on-microsoft-edge",
    "desc": "Set <b>Qwant</b> your homepage on Microsoft Edge browser. Visit the web page www.<b>qwant</b>.com Click on the “More actions” button on the top-right. Select Settings.",
    "_id": "d9c89b24700f2708d64270f2a953fa11",
    "score": 0,
    "position": 6
  },
  {
    "title": "<b>Qwant</b> Junior",
    "favicon": "//s.qwant.com/fav/q/w/www_qwantjunior_com.ico",
    "url": "https://www.qwantjunior.com/",
    "source": "https://www.<b>qwant</b>junior.com",
    "desc": "<b>Qwant</b> is a search engine that respects your privacy and eases discovering and sharing via a social approach.",
    "_id": "3e675dcf4c04625e2a92fc6a27fe3868",
    "score": 0,
    "position": 7
  },
  {
    "title": "About <b>Qwant</b>",
    "favicon": "//s.qwant.com/fav/q/w/about_qwant_com.ico",
    "url": "https://about.qwant.com/",
    "source": "https://about.<b>qwant</b>.com",
    "desc": "<b>Qwant</b>, the European search engine that respects your privacy. Based and designed in Europe, <b>Qwant</b> is the first search engine which protects its users freedoms and ensures that the digital ecosystem remains healthy.",
    "_id": "0343981bab2428bceab5998c3881ab83",
    "score": 0,
    "position": 8
  },
  {
    "title": "<b>Qwant</b> Lite",
    "favicon": "//s.qwant.com/fav/q/w/lite_qwant_com.ico",
    "url": "https://lite.qwant.com/?l=en",
    "source": "https://lite.<b>qwant</b>.com/?l=en",
    "desc": "<b>Qwant</b> is a search engine that respects your privacy and eases discovering and sharing via a social approach.",
    "_id": "83fe09c9163323710b783b2dfa1b275b",
    "score": 0,
    "position": 9
  },
  {
    "title": "Products - About <b>Qwant</b>",
    "favicon": "//s.qwant.com/fav/q/w/about_qwant_com.ico",
    "url": "https://about.qwant.com/products/",
    "source": "https://about.<b>qwant</b>.com/products",
    "desc": "<b>Qwant</b> Search finds everything, except who you are. <b>Qwant</b> Search is the first European search engine, both efficient and ethical. It is based on two fundamental pilliars: protecting your privacy by not collecting any personal data linked to your queries, and guaranteeing neutrality and impartiality of results.",
    "_id": "01c11d4584089404b6096fd5292dfc4d",
    "score": 0,
    "position": 10
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <div id="content">
        <div id="results">
          {searchResult.map((data) => <SearchResult className="result" {...data} key={data._id} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
