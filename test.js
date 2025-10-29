import assert from 'node:assert';
import { add } from './index.js';

assert.strictEqual(add(2, 3), 5, 'add(2, 3) should equal 5');
console.log('Tests passed.');


