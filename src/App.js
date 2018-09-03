import React, {Component} from "react";
import "./sass/general.sass";

const cards = [];
class App extends Component {
  render() {
    return (
      <main>
        <ul className="list">
          {cards.map((card) => (
            <li className="list__item" key={card.key}>
              {card.key}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default App;
