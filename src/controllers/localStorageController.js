const localStorageController = (function () {
    
    let mainStorage = {
        "cardList": [],
        "size": 0
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

    const  saveCard = (card) => {
        if (storageAvailable) {
            const ls = window.localStorage;
            storageBuffer = JSON.parse(ls.getItem("mainStorage"));
            storageBuffer.cardList.push(card);
            storageBuffer.size++;
            ls.setItem("mainStorage",JSON.stringify(storageBuffer));
        } else {
            throw Error('saveCard() -> localStorage unavailable');
        }
    }

    const removeCard = (card) => {

    }

    return {
        storageAvailable,
        saveCard,
        removeCard
    }

})();

export { localStorageController };