import { createHomePage } from "./modules/home";


document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');

    function renderConent(content) {
        contentDiv.innerHTML = '';
        contentDiv.appendChild(content);
    }

    const homeTab = document.getElementById('home-tab');

    homeTab.addEventListener('click', () => renderConent(createHomePage()));


})