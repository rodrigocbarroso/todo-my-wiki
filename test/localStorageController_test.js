var assert = require('assert');
var jsdom = require('mocha-jsdom');
var localStorageController = require('../src/controllers/localStorageController.js');
//import { localStorageController } from '../src/controllers/localStorageController.js';


describe('access local Storage', () => {

        jsdom()

        it('coisona esse mocha', () => {
            console.log(window.localStorage.getItem("mainStorage"));

            assert.ok(localStorageController.storageAvailable());
        });

});
describe('get list of cards from localStorage', () => {


}); 



