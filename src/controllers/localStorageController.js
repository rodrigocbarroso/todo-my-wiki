import { Card } from '../Models/Card';

const localStorageController = (function () {
    
    let mainStorage = {
        "cardList": [],
        "idCounter": 0
    }

    //source MDN
    const storageAvailable = function (type) {
        var storage;
        try {
            storage = window[type];
            var x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch(e) {
            return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                (storage && storage.length !== 0);
        }
    }

    const accessLocalStorage = () => {
        if (storageAvailable) {
            const ls = window.localStorage;
            if(ls.getItem("mainStorage") == null) {
                // initialize mainStorage @ localStorage
                ls.setItem("mainStorage",mainStorage);
            } 
            return ls;
        } else {
            throw Error('local Storage couldn\'t be accessed');
        }
    }

    const  newCard = (card = new Card) => {
        const ls = accessLocalStorage();
        let storageBuffer = JSON.parse(ls.getItem("mainStorage"));
        card._id = storageBuffer.idCounter++;
        storageBuffer.cardList.push(card);
        ls.setItem("mainStorage",JSON.stringify(storageBuffer));
    }

    const removeCard = (card) => {
 	    const ls = accessLocalStorage();
    }

    const updateCard = (card) => {

    }

    return {
        storageAvailable,
        newCard,
        removeCard,
    	updateCard
    }

})();

export { localStorageController };

