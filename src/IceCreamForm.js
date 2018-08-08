import React, { Component } from 'react'
import { observable, action } from "mobx";
import { observer, inject } from 'mobx-react';

@inject(allStores => ({
  addIceCream: allStores.store.addIceCream
}))
@observer
export default class IceCreamForm extends Component {
  @observable iceCream = { flavor: "", color: "" };

  @action inputChange = (e) => {
    this.iceCream[e.target.name] = e.target.value;
  }
  submitForm = (e) => {
    // if (this.iceCream.flavor === "" || this.iceCream.color === "")
    //   return;
    this.props.addIceCream(this.iceCream.flavor, this.iceCream.color);
    this.iceCream = { flavor: "", color: "" };
  }
  render() {
    return (
      <form className="container">
        <input type="text" name="flavor" placeholder="flavor"
          // required
          onChange={this.inputChange} value={this.iceCream.flavor} />
        <input type="text" name="color" placeholder="color"
          //  required
          onChange={this.inputChange} value={this.iceCream.color} />
        <button type="button" onClick={this.submitForm} >Submit</button>
      </form>);
  }
}
