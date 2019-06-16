import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var baseUrl = "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=";
var minCorpusCount = "5000";
var apiKey = "pmknlvpqzk989cjxoet9jbo243u388ddhwki35k7mu5dyqih8";

class LoatharApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
        this.updateText = this.updateText.bind(this);
        this.updateText();
    }

    render() {
        return (
            <div className="main">
                <div className="app">
                    <div className="text">
                        <h1> {"Loathar's got your " + this.state.text + "."} </h1>
                        <h1> Right here. </h1>
                    </div>
                <button
                    onClick={() => this.updateText()}
                    >
                        {"What else do he got?"}
                    </button>
                </div>
            </div>
        )
    }
    updateText() {
        var url = baseUrl + minCorpusCount + "&api_key=" + apiKey;
        fetch(url)
            .then(response => response.json())
            .then((jsonData) => {
                this.setState({text: jsonData.word});
            })
            .catch((error) => {
                console.error(error)
            })
    }
}



// ========================================

ReactDOM.render(
  <LoatharApp />,
  document.getElementById('root')
);
