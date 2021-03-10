//Card Factory

export class Card {
    
    constructor(title, author, content, priority, id) {
        const initialDate = new Date();
        this._creationDate = initialDate.getDate();
        this._title = title;
        this._author = author;
        this._content = content;
        this._priority = priority;
           
    }

    set title(str) {
        this._title = str;
    }


}

