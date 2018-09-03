import React, {Component} from "react";
import EditableLabel from "react-inline-editing";
import "./sass/general.sass";

const generalList = [
  {
    title: "title 1",
    key: "1",
    subtitles: [
      {
        title: "title 1.1",
        key: "1.1",
        subtitles: [
          {
            title: "title 1.1.1",
            key: "1.1.1",
          },
          {
            title: "title 1.1.2",
            key: "1.1.2",
          },
          {
            title: "title 1.1.3",
            key: "1.1.3",
          },
        ],
      },
      {
        title: "title 1.2",
        key: "1.2",
      },
    ],
  },
  {
    title: "title 2",
    key: "2",
    subtitles: [
      {
        title: "title 2.1",
        key: "2.1",
        subtitles: [
          {
            title: "title 2.1.1",
            key: "2.1.1",
          },
        ],
      },
    ],
  },
];

class App extends Component {
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
    return <main>{this.mapArray(generalList)}</main>;
  }
}

export default App;
