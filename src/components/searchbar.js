import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchterm: "" };
  }

  onInputChange(searchterm) {
    this.setState({ searchterm });
    this.props.onLocationChange(searchterm);
  }

  render() {
    return (
      <div className="searchbar">
        <input
          className='form-control'
          onChange={ event => this.onInputChange(event.target.value) }
          value={ this.state.searchterm }
        />
      </div>
    );
  }
}

export default SearchBar;
