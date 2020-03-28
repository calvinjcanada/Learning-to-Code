import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    // State object for storing input
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onChange = event => {
    // Stores the typed input in the state object
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = event => {
    // Gets the text from the form
    event.preventDefault();
    // console.log(this.state.text);
    // Alert Message
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
      // Uses a prop function so need to add propType
      // 1st argument = alert message
      // 2nd argument = color it will appear
    } else {
      this.props.searchUsers(this.state.text);
      // Function to pass search text to App.js for processing
      // Passes as a prop (Place as a prop/attribute in <Search />)
      this.setState({ text: "" });
      // Reset form to no text
    }
  };

  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            // Stores in state object
            onChange={this.onChange}
            // Required or you won't be able to type in the search bar
            // Component level state (This is what you want for this)
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>

        {/* Clear Users button: Only appears if users have been searched */}
        {showClear && (
          <button
            className="btn btn-light btn-block"
            onClick={clearUsers}
            // Add propType for clearUsers
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
