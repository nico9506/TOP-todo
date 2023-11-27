/**
 * Creates the HTML elements
 */

import iconMenu from "./assets/bars-solid.svg";
import iconPlus from "./assets/circle-plus-solid.svg";
import githubIcon from "./assets/github.svg";

export function generateNavigationBar() {
    /**
     * Creates the nav bar element and returns the HTML element
     */

    // Labels
    const BUTTON_LABEL = "New task";
    const DEFAULT_TITLE = "TO-DO x Hacer!";

    const navbar = document.createElement("nav");

    // DIV to keep together the main logo and the list title
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");

    const menuIcon = new Image();
    menuIcon.src = iconMenu;
    menuIcon.id = "menuIcon";
    menuIcon.classList.add("logo");
    titleContainer.appendChild(menuIcon);

    const appName = document.createElement("h1");
    appName.classList.add("app-name");
    appName.textContent = DEFAULT_TITLE;
    titleContainer.appendChild(appName);

    // Add task button contains an Icon and a label
    const addBtn = document.createElement("button");
    addBtn.classList.add("add-btn");
    addBtn.id = "addBtn";
    addBtn.textContent = BUTTON_LABEL;

    const plusIcon = new Image();
    plusIcon.src = iconPlus;
    addBtn.appendChild(plusIcon);

    navbar.appendChild(titleContainer);
    navbar.appendChild(addBtn);

    return navbar;
}

export function generateFooter() {
    /**
     * Creates the footer element and returns the HTML element
     */
    const GITHUB_USER = "nico9506";
    const GITHUB_REPO_URL = "https://github.com/nico9506/TOP-todo";

    const footer = document.createElement("footer");

    // DIV to keep together the GitHub logo and the username
    const githubLink = document.createElement("a");
    githubLink.classList.add("github-contact-info");
    githubLink.href = GITHUB_REPO_URL;

    const logo = new Image();
    logo.src = githubIcon;
    logo.classList.add("footer-logo");
    githubLink.appendChild(logo);

    const githubUser = document.createElement("h1");
    githubUser.classList.add("github-user");
    githubUser.id = "githubUser";
    githubUser.textContent = GITHUB_USER;
    githubLink.appendChild(githubUser);

    footer.appendChild(githubLink);

    return footer;
}

export function generateSidePanel() {
    /**
     * Creates the side-panel element and returns the HTML element
     */

    const sidePanel = document.createElement('aside');
    sidePanel.classList.add('side-panel');
    sidePanel.id = 'sidePanel';

    const text = document.createElement('h1');
    text.textContent = "Sidepanel title";

    sidePanel.appendChild(text);

    return sidePanel;
}

export function generateMainPanel() {
    /**
     * Creates the main content panel element and returns the HTML element
     */

    const mainPanel = document.createElement('main');
    mainPanel.classList.add('main-content');

    const text = document.createElement('h1');
    text.textContent = "MainPanel title";

    mainPanel.appendChild(text);

    return mainPanel;
}