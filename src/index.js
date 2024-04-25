import { createHomePage } from "./modules/home";
import { createMenuPage } from "./modules/menu";
import { createAboutPage } from "./modules/about";


document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');

    function renderConent(content) {
        contentDiv.innerHTML = '';
        contentDiv.appendChild(content);
    }

    const homeTab = document.getElementById('home-tab');
    const menuTab = document.getElementById('menu-tab');
    const aboutTab = document.getElementById('about-tab');

    homeTab.addEventListener('click', () => renderConent(createHomePage()));
    menuTab.addEventListener('click', () => renderConent(createMenuPage()));
    aboutTab.addEventListener('click', () => renderConent(createAboutPage()))


    // Render the home page by default
    renderConent(createHomePage());

})