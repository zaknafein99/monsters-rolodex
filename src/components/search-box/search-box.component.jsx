import { Component } from "react";

class SearchBox extends Component {
  
  render() {
    return (
      <div className={this.props.className}>
        <input
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;