import { observable, action, computed } from "mobx";

class IceCreamStore {
  @observable iceCreams = [];

  @action addIceCream = (flavor, color) => {
    this.iceCreams.push({ flavor, color });
  }

  @action deleteIce = (index) => {
    console.log('delete', index);
    this.iceCreams.splice(index, 1);
    // this.iceCreams = this.iceCreams.filter((ice, i) => i !== index ? ice : false);
  }

  @action updateIce = (data, index, prop) => {
    this.iceCreams[index][prop] = data;
  }

  @computed get iceCreamsCount() {
    return this.iceCreams.length;
  }
}

const store = new IceCreamStore();
export default store;