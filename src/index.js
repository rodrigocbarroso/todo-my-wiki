import { Card } from './Models/Card.js';
import { Project } from './Models/Project.js';

import {localStorageController} from './controllers/localStorageController.js';

const refresh = () => {
    //refresh project counter
    const div =  document.querySelector("#project-counter");
    const count = localStorageController.getProjectList().length;
    div.innerHTML = `Total Projects: ${count}`;

    //showprojectlist
    showProjectList();

    return;
};

//show project list
const showProjectList = () => {
    const list = localStorageController.getProjectList();
    const container = document.querySelector(".project-list");
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    
    console.log(list);
    list.forEach( (proj) => {
        const element = document.createElement('div');
        element.classList.add("row");
        element.classList.add("project");
        element.classList.add("top-border");
        element.innerHTML =  `<div class="naming">${proj._title}</div>`
        const priorityListElement = document.createElement('div');
        priorityListElement.classList.add('priority-list');
        proj._cards.forEach( (card) => {
            priorityListElement.innerHTML += `<svg width="10" height="10">
                                                <rect class="sqr-priority-0" width="10" height="10" />
                                             </svg>
                                             <button>X<button>`;
        });
    
        container.appendChild(element);
        container.appendChild(priorityListElement);
    });
}


//toggle new project section (for hidden/show behavior)
let projectTabOpen = false;
const toggleNewProjectSection = () => {
    if(!projectTabOpen) {
        document.querySelector("#new-project-section").classList.remove("hidden");
        projectTabOpen = true;
        const checkH = document.querySelector("#new-project-section").scrollHeight;

        document.querySelector("#new-project-section").classList.add("done");
    } else {
        document.querySelector("#new-project-section").classList.remove("done");
        document.querySelector("#new-project-section").classList.add("hidden");

        projectTabOpen = false;
    }
}

//new project button handler

document.querySelectorAll("#new-project-btn").forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        toggleNewProjectSection();
        console.log("new-project-btn: click");

        return;
    });    
});

//add project btn handler
document.querySelector("#add-project-btn").addEventListener("click", (e) => {
    //get input (title)
   console.log(document.querySelector("#input-project-name").value);
   const title = document.querySelector("#input-project-name").value;
   const buffer = localStorageController.newProject(title);
    toggleNewProjectSection();
    console.log(buffer);
    refresh();
});



refresh();

//clear();
//createView();
