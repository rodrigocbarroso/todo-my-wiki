(()=>{"use strict";class e{constructor(e,t,o,r,c){const n=new Date;this._creationDate=n.getDate(),this._title=e,this._project=r,this._content=t,this._priority=o,this._dueDate=c}}const t=function(){let t={projects:[],idCounter:0};const r=function(e){var t;try{t=window[e];var o="__storage_test__";return t.setItem(o,o),t.removeItem(o),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}},c=()=>{if(r){const e=window.localStorage;return null==e.getItem("mainStorage")&&e.setItem("mainStorage",JSON.stringify(t)),JSON.parse(e.getItem("mainStorage"))}throw Error("local Storage couldn't be accessed")};return{storageAvailable:r,newCard:(t=new e)=>{let o=c();o.idCounter++,t._id=o.idCounter,o.cardList.push(t)},removeCard:e=>{},updateCard:e=>{},getList:()=>c().cardList,getCardById:e=>{},getProjectList:()=>c().projects,newProject:e=>{const t=new o(e);let n=c();return n.projects.push(t),(e=>{if(r)return window.localStorage.setItem("mainStorage",JSON.stringify(e)),e;throw Error("local Storage couldn't be accessed")})(n),console.log("Project Create Successfully"),n},clear:()=>{window.localStorage.setItem("mainStorage",JSON.stringify(t))}}}();function o(e){this._title=e,this._cards=[]}const r=()=>{const e=document.querySelector("#project-counter"),o=t.getProjectList().length;e.innerHTML=`Total Projects: ${o}`,c()},c=()=>{const e=t.getProjectList(),o=document.querySelector(".project-list");for(;o.hasChildNodes();)o.removeChild(o.lastChild);console.log(e),e.forEach((e=>{const t=document.createElement("div");t.classList.add("row"),t.classList.add("project"),t.classList.add("top-border"),t.innerHTML=`<div class="naming">${e._title}</div>`;const r=document.createElement("div");r.classList.add("priority-list"),e._cards.forEach((e=>{r.innerHTML+='<svg width="10" height="10">\n                                                <rect class="sqr-priority-0" width="10" height="10" />\n                                             </svg>\n                                             <button>X<button>'})),o.appendChild(t),o.appendChild(r)}))};let n=!1;const s=()=>{n?(document.querySelector("#new-project-section").classList.remove("done"),document.querySelector("#new-project-section").classList.add("hidden"),n=!1):(document.querySelector("#new-project-section").classList.remove("hidden"),n=!0,document.querySelector("#new-project-section").scrollHeight,document.querySelector("#new-project-section").classList.add("done"))};document.querySelectorAll("#new-project-btn").forEach((e=>{e.addEventListener("click",(e=>{s(),console.log("new-project-btn: click")}))})),document.querySelector("#add-project-btn").addEventListener("click",(e=>{console.log(document.querySelector("#input-project-name").value);const o=document.querySelector("#input-project-name").value,c=t.newProject(o);s(),console.log(c),r()})),r()})();