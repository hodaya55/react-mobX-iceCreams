import React, { Component } from 'react'
import { inject } from 'mobx-react';
import InlineEdit from 'react-inline-editing';


@inject("store")
export default class IcecreamView extends Component {
  render() {
    const { i, flavor, color } = this.props;
    return (
      <div className="ice">
        flavor: <InlineEdit text={flavor} onFocusOut={(data) => {
          this.props.store.updateIce(data, i, "flavor");
        }} />
        color: <InlineEdit text={color} onFocusOut={(data) => {
          this.props.store.updateIce(data, i, "color");
        }} />
        <input type="button" onClick={() => {
          this.props.store.deleteIce(i);
        }} value="X" />
      </div>
    )
  }
}


