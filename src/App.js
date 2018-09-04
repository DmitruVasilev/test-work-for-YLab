import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import EditableLabel from "react-inline-editing";

class App extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    list: [],
  };

  mapArray = (list) => (
    <ul className="list">
      {list.map((listItem) => (
        <li className="list__item" key={listItem.key}>
          <EditableLabel text={listItem.title} labelClassName="EditableLabel" inputClassName="EditableInput" />
          {listItem.subtitles ? this.mapArray(listItem.subtitles) : null}
        </li>
      ))}
    </ul>
  );

  render() {
    const {list} = this.props;
    return <main>{this.mapArray(list)}</main>;
  }
}

export default connect((state) => ({list: state.list}))(App);
