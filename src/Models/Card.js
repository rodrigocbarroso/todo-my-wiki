//Card Factory
 class Card {
    
    constructor(title, content, priority, project, dueDate) {
        const initialDate = new Date();
        this._creationDate = initialDate.getDate();
        this._title = title;
        this._project = project;
        this._content = content;
        this._priority = priority;
        this._dueDate = dueDate;
    }

}

export {Card};