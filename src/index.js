import { Card } from './Models/Card.js';
import {localStorageController} from './controllers/localStorageController.js';

const contentContainer = document.querySelector('#content');

const clear = () => {
    while(contentContainer.hasChildNodes()) {
        contentContainer.removeChild(contentContainer.firstChild);
    }
    console.log('clear view');
}

const listView = () => {

}

const createView = () => {
    const div = document.createElement('div');
    div.classList.add('create-div');
    div.id = 'create-div';
    div.innerHTML = "<p>test html</p>";
    contentContainer.appendChild(div);
}

const aboutView = () => {

}

clear();
createView();
