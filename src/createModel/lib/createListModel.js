import { List } from 'immutable';


// Сделать прокси


export default function createListModel({ propCreator }) {
  function createList(list) {
    return List(list.map(propCreator));
  }


  class ListModel {
    constructor(list = []) {
      if (List.isList(list)) {
        this.list = list;
      } else if (list instanceof ListModel) {
        this.list = list.list;
      } else {
        this.list = createList(list);
      }
    }

    get size() {
      return this.list.size;
    }

    get(...rest) {
      return this.list.get(...rest);
    }

    toJS() {
      return this.list.toJS();
    }

    toArray() {
      return this.list.toArray();
    }

    toString() {
      return JSON.stringify(this.list);
    }

    findIndex(...rest) {
      return this.list.findIndex(...rest);
    }

    concat(list = []) {
      return new ListModel(this.list.concat(createList(list)));
    }

    set(index, item) {
      return new ListModel(this.list.set(index, propCreator(item)));
    }

    map(...rest) {
      return new ListModel(this.list.map(...rest));
    }

    filter(...rest) {
      return new ListModel(this.list.filter(...rest));
    }

    push(item) {
      return new ListModel(this.list.push(propCreator(item)));
    }

    unshift(item) {
      return new ListModel(this.list.unshift(propCreator(item)));
    }

    remove(...rest) {
      return new ListModel(this.list.remove(...rest));
    }

    sort(...rest) {
      return new ListModel(this.list.sort(...rest));
    }

    first() {
      return this.list.first();
    }

    reduce(...rest) {
      return this.list.reduce(...rest);
    }

    join(...rest) {
      return this.list.join(...rest);
    }
  }


  return ListModel;
}
