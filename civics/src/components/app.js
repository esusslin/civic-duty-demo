import React, { Component } from "react";

import SearchBar from "../containers/search_bar";
import RepList from "../containers/rep_list";

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <RepList />
      </div>
    );
  }
}
