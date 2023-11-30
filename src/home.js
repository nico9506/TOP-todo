/**
 * Creates the HTML elements to generate the DOM
 */

import iconMenu from "./assets/bars-solid.svg";
import iconPlus from "./assets/circle-plus-solid.svg";
import githubIcon from "./assets/github.svg";
import homeIcon from "./assets/home.svg";
import todayIcon from "./assets/today.svg";
import calendarIcon from "./assets/calendar.svg";
import anytimeIcon from "./assets/stack.svg";
import newListIcon from "./assets/folder-plus.svg";

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

    // Add-new-task button
    const addBtn = createBtnIconLabel(BUTTON_LABEL, iconPlus);

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

    //New list btn label
    const NEW_LIST_BTN_LABEL = "new list";

    //Default group filters
    const HOME = "home";
    const TODAY = "today";
    const UPCOMING = "upcoming";
    const ANYTIME = "anytime";

    const sidePanel = document.createElement("aside");
    sidePanel.classList.add("side-panel");
    sidePanel.id = "sidePanel";

    sidePanel.appendChild(createBtnIconLabel(NEW_LIST_BTN_LABEL, newListIcon));

    sidePanel.appendChild(createNewListForm());

    sidePanel.appendChild(createSidePanelGroup(HOME, homeIcon));
    sidePanel.appendChild(createSidePanelGroup(TODAY, todayIcon));
    sidePanel.appendChild(createSidePanelGroup(UPCOMING, calendarIcon));
    sidePanel.appendChild(createSidePanelGroup(ANYTIME, anytimeIcon));

    return sidePanel;
}

export function generateMainPanel() {
    /**
     * Creates the main content panel element and returns the HTML element
     */

    const mainPanel = document.createElement("main");
    mainPanel.classList.add("main-content");

    const text = document.createElement("h1");
    text.textContent = "MainPanel title";

    mainPanel.appendChild(text);

    return mainPanel;
}

function createSidePanelGroup(groupName, icon_path) {
    /**
     * Creates and returns the HTML element to use place in the side panel menu
     */

    const group = document.createElement("div");
    group.id = "sp_g_" + groupName;
    group.classList.add("sp-group");

    const icon = new Image();
    icon.src = icon_path;
    icon.classList.add("sp-g-icon");
    group.appendChild(icon);

    const label = document.createElement("h3");
    label.classList.add("sp-g-label");
    label.textContent = groupName;
    group.appendChild(label);

    return group;
}

function createBtnIconLabel(label, icon_path) {
    /**
     * Returns a created button element containing an Icon and a text label
     */
    
    // Add task button contains an Icon and a label
    const btn = document.createElement("button");
    btn.classList.add("btn-icon-label");
    btn.id = "btn-" + label.toLowerCase().replace(" ", "_");
    btn.textContent = label;

    const icon = new Image();
    icon.src = icon_path;
    btn.appendChild(icon);

    return btn;
}

function createNewListForm() {
    /**
     * Generates the fields to create a new list.
     * Return the container with its elements. 
     */

    const POPUP_TITLE = "Create a new list";

    const popupForm = document.createElement('div');
    popupForm.id = "new_list_input_form";
    popupForm.classList.add("popup");

    const form = document.createElement('form');
    form.classList.add('form-container');

    const title = document.createElement('h1');
    title.classList.add("popup-title");
    title.textContent = POPUP_TITLE;
    form.appendChild(title);

    // const labelNewListName = document.createElement('label');
    // labelNewListName.setAttribute("for", "listName");
    // labelNewListName.textContent = "List name"
    // form.appendChild(labelNewListName);

    const inputNewListName = document.createElement('input');
    inputNewListName.type = 'text';
    inputNewListName.id = 'new_list_input_field_text'
    inputNewListName.placeholder = "New list name";
    inputNewListName.name = "listName";
    form.appendChild(inputNewListName);

    const addBtn = document.createElement('button');
    addBtn.type = "button";
    addBtn.id = "add_list_btn_form";
    addBtn.classList.add("btn-form");
    addBtn.textContent = "Add";
    form.appendChild(addBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.type = "button";
    cancelBtn.id = "cancel_btn_form";
    cancelBtn.classList.add("btn-form");
    cancelBtn.classList.add("cancel");
    cancelBtn.textContent = "Cancel";
    form.appendChild(cancelBtn);

    popupForm.appendChild(form);

    return popupForm;
}