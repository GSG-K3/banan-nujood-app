import React from "react";

class ArtistResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: '',
      isLoaded: false
    };
  }
  componentDidMount(event) {
    fetch(
      `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${this.props.artistName}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          items: data.artists[0]
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return <div> {this.state.items}</div>;
  }
}

export default ArtistResult;
