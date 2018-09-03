import React, {Component} from "react";
import "./sass/general.sass";

const list = [
  {
    title: "title",
    key: "1",
    subtitles: [
      {
        title: "title",
        key: "1.1",
        subtitles: [
          {
            title: "title",
            key: "1.1.1",
          },
        ],
      },
    ],
  },
];

class App extends Component {
  render() {
    return (
      <main>
        {list.map((listItem) => (
          <ul className="list">
            <li className="list__item" key={listItem.key}>
              {listItem.title}
            </li>
            {listItem.subtitles &&
              listItem.subtitles.map((listItem1) => (
                <ul className="list">
                  <li className="list__item" key={listItem1.key}>
                    {listItem1.title}
                  </li>
                </ul>
              ))}
          </ul>
        ))}
      </main>
    );
  }
}

export default App;
