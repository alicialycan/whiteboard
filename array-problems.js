'use strict';

// Will be O(n^2)
// True if dupes
// False otherwise
// containsDupes(arr:Array)-> boolean
// include items [a, b, c, d] a=3, b=2, c=1, d=0
// How can we handle this more exponentially so it's smoother? Can we shrink the rate at which it grows as the sample size increases
// A set is a collection with no duplicate items. It's like running a filter (if you already exist in the array then false don't repeat yourself), needs to be an efficient way to create a set (need to figure out if it's a duplicate first). There's a toSet method.

// A more efficient way. Use an additional data structure to keep track if something has been seen before
// has item been seen
// does item existi n lookup
// if(lookup[item]) //lookup has key
//  return true
// else
// add key to lookup
// lookup[item] = true
// return false

let containsDupes = (arr) => {
    let lookup = {}; // object
    for (i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (lookup[item]) {
            return true;
        }
        lookup[item] = true;
    }
    return false;
};

//why is an else not necessary? It is implied...