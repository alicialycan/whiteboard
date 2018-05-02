'use strict';
// Hash map is an array with data stored in different objects. Stored according to its key

class HashMap {
  constructor() {
    let SIZE = 13;

    this.data = [];
    for (let i =0; i < SIZE; i++) {
      this.data[i] = null;
    }
  }

  put(key, value) {
    let oo = {key: key, value: value};
    let index = this.getIndex(key);
    this.data[index] = oo;
  }
  // return the value associated with the given key
  // O(N) - worst case this has to look through the entire array
  // to find the key it's looking for

  // 0(1) - constant time access (lookup) no matter how full the hash map gets. 
  // No matter what it simply computes the hash code, turns that into an index in the array and directly accesses the array at that index.
  // -> take key on the user, compute the hash code, and jump directly to the spot that person is/store it at an index of that array; don't have to look through the entire array.
  get(key) {
    let index = this.getIndex(key);
    
    if (!this.data || !this.data[index].value) {
      return null;
    }
    return this.data[index].value;
  }

  size() {
    return this.data.length
  }

  toString() {
    return this.data.map(el => {
      if (!el) {
        return `${i}: null`;
      }
      return `${i} {${el.key}, ${el.value} \n`;
    });
  }

  // assume all keys are strings (trying to turn a string into a number)
  hashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      let charCode = key.charCodeAt(i);
      hash += charCode;
    }
    return hash;
  }

  // modulas map. Take hash code and modualise it by the length of the arr, guarantees we get some number inside the arr. Add up #s, mod it, and that gives us the 
  getIndex(key) {
    let hash = this.hashCode(key);
    let index = hash % this.data.length;
    return index;
  }
}

module.exports = HashMap;