import React from "react";
import Results from "./results";

export default class MainPage extends React.Component {
  state = {
    loading: false,
    toTranslat: {
      text: "",
      key: ""
    }
  };

  HandleInput = (e) => {
    this.setState({
      loading: true,
      toTranslat: {
        text: e.target.value,
        key: Math.random() + 1
      }
    });
  };

  AddText = (e) => {
    e.preventDefault();
    const newText = this.state.toTranslat.text;
    // console.log(newText);
    if (newText.trim()) {
      this.setState({
        loading: false,
        toTranslat: {
          text: "",
          key: ""
        }
      });
    }
  };

  render() {
    return (
      <>
        <form id="searchForm" className="searchBox" onSubmit={this.AddText}>
          <input
            type="text"
            placeholder="Enter task here"
            value={this.state.toTranslat.text}
            onChange={this.HandleInput}
          />
          <button type="submit">Translate</button>
          
        </form>
        <Results inputText= {this.state.toTranslat.text} />
      </>
    );
  }
}
