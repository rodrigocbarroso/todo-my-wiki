import { Card } from '../Models/Card';
import { Project } from '../Models/Project';

const localStorageController = (function () {
    
    let mainStorage = {
        "projects": [],
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

    const getMainStorage = () => {
        if (storageAvailable) {
            const ls = window.localStorage;
            if(ls.getItem("mainStorage") == null) {
                // initialize mainStorage @ localStorage
                ls.setItem("mainStorage",JSON.stringify(mainStorage));
            } 
            return JSON.parse(ls.getItem("mainStorage"));
        } else {
            throw Error('local Storage couldn\'t be accessed');
        }
    }

    const setMainStorage = (storageBuffer) => {
        if (storageAvailable) {
            const ls = window.localStorage;
            ls.setItem("mainStorage",JSON.stringify(storageBuffer));
            return storageBuffer;
        } else {
            throw Error('local Storage couldn\'t be accessed');
        }
    }

    const newProject = (title) => {
        const proj = new Project(title);
        let storageBuffer = getMainStorage();
        storageBuffer.projects.push(proj);
        setMainStorage(storageBuffer);
        console.log('Project Create Successfully');
        return storageBuffer;
    }



    const  newCard = (card = new Card) => {
 
        let storageBuffer = getMainStorage();
        storageBuffer.idCounter++;
        card._id = storageBuffer.idCounter;
        storageBuffer.cardList.push(card);
      //  ls.setItem("mainStorage",JSON.stringify(storageBuffer));
    }

    const removeCard = (card) => {
 	    
    }

    const updateCard = (card) => {

    }

    const getProjectList = () => {
        let storageBuffer = getMainStorage();
        return storageBuffer.projects;
    }

    const getList = () => {
       
        let storageBuffer = getMainStorage();
        return storageBuffer.cardList;
    }

    const getCardById = (id) => {

    }

    const clear = () => {
        // initialize mainStorage @ localStorage
        window.localStorage.setItem("mainStorage",JSON.stringify(mainStorage));
    }

    return {
        storageAvailable,
        newCard,
        removeCard,
    	updateCard,
        getList,
        getCardById,
        getProjectList,
        newProject,
        clear
    }

})();

export { localStorageController };

