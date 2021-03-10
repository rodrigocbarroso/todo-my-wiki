import { Card } from './Models/Card.js';
import localStorageController from './controllers/localStorageController.js';

const card = new Card('BOB');
console.log('test');
console.log(card);
card.title = 'jorge';
console.log(card);

