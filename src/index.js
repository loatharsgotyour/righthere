import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var baseUrl = "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=";
var minCorpusCount = "5000";
var apiKey = "a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"; //demo key from developer.wordnik.com

class LoatharApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: 'test'};
        this.updateText = this.updateText.bind(this);
    }

    render() {
        return (
            <div>
                <h2> {"Loathar's got your " + this.state.text + "."} </h2>
                <h2> Right here. </h2>
                <button
                    onClick={() => this.updateText()}
                    >
                        {"What else do he got?"}
                    </button>
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
