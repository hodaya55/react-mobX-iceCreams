import React, { Component } from 'react';
import './App.css';
import './test.css';
import IceCreamForm from './IceCreamForm'
import { observer, inject } from 'mobx-react';
import IcecreamView from './IcecreamView'


@inject("store")
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <IceCreamForm />
        <ul>
          {this.props.store.iceCreams.map((iceCream, i) =>
            <IcecreamView i={i} {...iceCream} key={iceCream.flavor + i * Math.random(0, 1)} />
          )}
        </ul>
      </div>
    );
  }
}

export default App;
