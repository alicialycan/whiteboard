'use strict';

let str = 'On the twelfth day of Christmas my true love sent to me 12 Drummers Drumming 11 Pipers Piping 10 Lords a Leaping 9 Ladies Dancing 8 Maids a Milking 7 Swans a Swimming 6 Geese a Laying 5 Golden Rings 4 Calling Birds 3 French Hens 2 Turtle Doves and a Partridge in a Pear Tree';

function tally(str) {
  let arr = str.split(' ');
  let wordTally = {
    maxWord: '',
    maxNum: 0
  };
  
  for (let i = 0; i < arr.length; i++) {
    word = arr[i];
    if (!wordTally[word]) {
      wordTally[word] = 0;
    }
    wordTally[word]++;
    
    if (wordTally[word] > wordTally.maxNum) {
      wordTally.maxWord = word;
      wordTally.maxNum = wordTally[word];
    }
  }
    return [wordTally.maxWord, wordTally.maxNum];
}

tally(str);