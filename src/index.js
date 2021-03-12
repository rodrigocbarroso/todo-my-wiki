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

const createCardBtn = document.querySelector('#create-card-btn');
createCardBtn.addEventListener('click', () => {
    const titleInput =  document.querySelector('#title-input');
    const textInput = document.querySelector('#card-text-input');
    console.log(titleInput);
    const newCard = new Card(titleInput.value,'Rodrigo',textInput.value,1);
    localStorageController.newCard(newCard);

});

const cardList = localStorageController.getList();
cardList.forEach(element => {
    console.log(element);
});

//clear();
//createView();
