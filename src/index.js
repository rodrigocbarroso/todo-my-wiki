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
        //element: project row and name
        const element = document.createElement('div');
        element.classList.add("row");
        element.classList.add("project");
        element.classList.add("top-border");
        const pjid = "pjid-" + proj._title; //naming convenction of project id to handle selection
        element.innerHTML =  `<div class="naming" id="${pjid}">${proj._title}</div>`
        //element: priority list
        const priorityListElement = document.createElement('div');
        priorityListElement.classList.add('priority-list');
        proj._cards.forEach( (card) => {
            priorityListElement.innerHTML += `<svg width="10" height="10">
                                                <rect class="sqr-priority-0" width="10" height="10" />
                                             </svg>
                                             <button>X<button>`;
        });
        //element: delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = "X";

        // bundle up
        container.appendChild(element);
        container.appendChild(priorityListElement);
        element.appendChild(deleteBtn);

        //click handling
        element.addEventListener("click", (e) => {
            console.log(`click no projeto ${proj._title}`);
        });
        deleteBtn.addEventListener("click", (e) => {
            console.log(e);
            e.stopPropagation();
        })
    });
}

//TOGGLE: show/hide section
//requires initial classes class="hidden translateX"
let openSections = {};
const toggleViewSection = (sectionId) => {
    if(!openSections[`${sectionId}`]) {
        document.querySelector(sectionId).classList.remove("hidden");
        openSections[`${sectionId}`] = true;
        const checkH = document.querySelector(sectionId).scrollHeight;
        document.querySelector(sectionId).classList.add("done");
    } else {
        document.querySelector(sectionId).classList.remove("done");
        document.querySelector(sectionId).classList.add("hidden");
        openSections[`${sectionId}`] = false;
    }
    console.log(openSections);
}

//Button: new project button handler
document.querySelectorAll("#new-project-btn").forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        toggleViewSection("#new-project-section");
        console.log("new-project-btn: click");
        return;
    });    
});

//Button: Add project btn handler
document.querySelector("#add-project-btn").addEventListener("click", (e) => {
    //get input (title)
   console.log(document.querySelector("#input-project-name").value);
   const title = document.querySelector("#input-project-name").value;
   const buffer = localStorageController.newProject(title);
    toggleViewSection("#new-project-section");
    console.log(buffer);
    refresh();
});

//Button: Add Card Handler
const cardSectionBtns = document.querySelectorAll("#add-card-btn,#discard-card-btn");
cardSectionBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        toggleViewSection("#add-card-section");   
    });
});


refresh();

//clear();
//createView();
