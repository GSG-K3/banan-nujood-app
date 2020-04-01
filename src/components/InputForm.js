import React from "react";
import ArtistResult from './ArtistResult';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", key: "" };
  }
  handelChange = (event) => {
    this.setState({ value: event.target.value, key: Date.now() });
  };

  handelsubmit = (event) => {
    event.preventDefult();
    const result = this.state.value;

    if (result.trim()) {
      this.setState({ value: "", key: "" });
    }
  };

  render() {

    return (
      <div>
        <h1>Celebrity World</h1>
        <p> You can read about your favorite artist here...</p>
        <form className="formStyle" onSubmit={this.handelSubmit}>
          <label className="item">Artist Name</label>
          <input
            className="item"
            value={this.state.value}
            onChange={this.handelChange}
          />
          <button className="item" type="submit">
            Search
          </button>
        </form>
        <ArtistResult artistName={this.state.value}/>

      </div>
    );
  }
}

export default InputForm;
