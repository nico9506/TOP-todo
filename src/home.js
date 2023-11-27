import iconMenu from './assets/bars-solid.svg';
import iconPlus from './assets/circle-plus-solid.svg';

export default function generateNavigationBar() {
    /**
     * Creates the nav bar element and returns the HTML element
     */

    // Labels
    const BUTTON_LABEL = "New task";
    const DEFAULT_TITLE = "TO-DO x Hacer!";

    const navbar = document.createElement('nav');

    // DIV to keep together the main logo and the list title
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');

    const logo = new Image();
    logo.src = iconMenu;
    logo.classList.add('logo');
    titleContainer.appendChild(logo);

    // Text to show the selected ToDo list
    const appName = document.createElement('h1');
    appName.classList.add('app-name');
    appName.id = 'appName';
    appName.textContent = DEFAULT_TITLE;
    titleContainer.appendChild(appName);

    // Add task button contains an Icon and a label
    const addBtn = document.createElement('button');
    addBtn.classList.add('add-btn');
    addBtn.id = 'addBtn';
    addBtn.textContent = BUTTON_LABEL;

    const plusIcon = new Image();
    plusIcon.src = iconPlus;
    addBtn.appendChild(plusIcon);

    navbar.appendChild(titleContainer);
    navbar.appendChild(addBtn);

    return navbar;
};