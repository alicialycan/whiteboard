'use strict';

const KeyValueList = require('../key-value-list');

describe('KeyValueList', () => {
  it('should store and get key-value pairs', () => {
    let kv = new KeyValueList();
    kv.put('phone', '555-111-2222');
    kv.put('email', 'me@aol.com');
    kv.put('colors', ['green', 'blue', 'purple']);

    expect(kv.get('phone')).toEqual('555-111-2222');
    expect(kv.get('email')).toEqual('me@aol.com');
    expect(kv.get('colors')).toEqual(['green', 'blue', 'purple']);
  })
})