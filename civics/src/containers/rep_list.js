import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";

class RepList extends Component {
  renderList() {
    return _.map(this.props.reps[0], each => {
      return (
        <li key={each.name} className="list-group-item">
          {each.name}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps({ reps }) {
  return { reps };
}

export default connect(mapStateToProps)(RepList);
