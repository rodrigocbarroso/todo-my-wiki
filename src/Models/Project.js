import { card } from "./Card";
import { localStorageController } from "../controllers/localStorageController";

function Project (title) {

    this._title = title;
    this._cards = [];
    
}

export { Project };
