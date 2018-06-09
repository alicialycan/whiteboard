'use strict';

//To Do: Sort by distance, find k nearest neighbors, calculate the majority

//Find distance of all points from integer k
let distance = (p1, p2) => {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.sqrt(dx * dx + dy * dy);
};

//Sort the list of labels
let tally = (list) => {
  let tally_ = {};
  list.forEach(item => {
    if (tally_[item.label] === undefined) {
      tally_[item.label] = 0;
    }
    tally_[item.label]++;
  });
  return tally_;
};

//Sort majority
let majority = (tally_) => {
  let largestAmt = 0;
  let key = undefined;
  for (key in tally_) {
    if (tally_[key] > largestAmt) {
      largestAmt = tally_[key];
    }
  }
  return key;
}

//attach distances to all labeled Points
let kNearestNeighbors = (labeledPoints, k, unlabeledPoints) => {
  labeledPoints = labeledPoints.map(pp => {
    pp.distance = distance(pp, unlabeledPoints);
    return pp;
  });

  //sort according to smallest distance
  labeledPoints.sort((a, b) => {
    if(a.distance < b.distance) { return -1; }
    else if (a.distance > b.distance) { return 1; }
    return 0;
  });

  //pick off k-nearest items
  let nearest = labeledPoints.slice(0, k);
  let tally_ = tally(nearest);
  return majority(tally_);
};

let unlabeledPoint = {x: 4, y: 9};
let labeledPoints = [
  {x: 5, y: 8, label:'Tumwater'},
  {x: 6, y: 10, label: 'Icicle'},
  {x: 7, y:6, label: 'Wenatchee'}
];

console.log(1, kNearestNeighbors(labeledPoints, 1, unlabeledPoint));
console.log(2, kNearestNeighbors(labeledPoints, 2, unlabeledPoint));
console.log(3, kNearestNeighbors(labeledPoints, 3, unlabeledPoint));