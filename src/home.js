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
import pencilIcon from "./assets/edit.svg";
import trashIcon from "./assets/trash.svg";
import { searchListAndTogglePopup } from "./functionalities";

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
    mainPanel.id = "main_content";

    const text = document.createElement("h1");
    text.textContent = "MainPanel title";
    mainPanel.appendChild(text);

    // Main container to organize multiple task containers
    const taskSection = document.createElement("div");
    taskSection.id = "task_panel";
    taskSection.classList.add("tasks-section");

    mainPanel.appendChild(taskSection);

    return mainPanel;
}

export function generateNewTaskPopup() {
    /**
     * Generates the HTML element box containing the proper fields
     * to create TASKS
     */

    const POPUP_TITLE = "Task properties";
    const LABEL_NAME = "Name";
    const LABEL_DESC = "Description";
    const LABEL_DATE = "Deadline";
    const LABEL_PRIORITY = "Priority";

    const popupForm = document.createElement("div");
    popupForm.id = "new_task_popup";
    popupForm.classList.add("popup-task");

    const form = document.createElement("form");
    form.classList.add("form-container");
    form.action = "javascript:void(0);";

    const title = document.createElement("h1");
    title.classList.add("popup-title");
    title.textContent = POPUP_TITLE;
    form.appendChild(title);

    // Name
    const labelNewTaskName = document.createElement("label");
    labelNewTaskName.setAttribute("for", "taskName");
    labelNewTaskName.textContent = LABEL_NAME;
    form.appendChild(labelNewTaskName);

    const inputNewTaskName = document.createElement("input");
    inputNewTaskName.type = "text";
    inputNewTaskName.id = "new_task_input_name";
    inputNewTaskName.placeholder = "New task name";
    inputNewTaskName.name = "taskName";
    inputNewTaskName.required;
    form.appendChild(inputNewTaskName);

    // Description
    const labelNewTaskDesc = document.createElement("label");
    labelNewTaskDesc.setAttribute("for", "taskDesc");
    labelNewTaskDesc.textContent = LABEL_DESC;
    form.appendChild(labelNewTaskDesc);

    const inputNewTaskDesc = document.createElement("input");
    inputNewTaskDesc.type = "text";
    inputNewTaskDesc.id = "new_task_input_desc";
    inputNewTaskDesc.placeholder = "Task description";
    inputNewTaskDesc.name = "taskDesc";
    form.appendChild(inputNewTaskDesc);

    // Due date
    const labelNewTaskDate = document.createElement("label");
    labelNewTaskDate.setAttribute("for", "taskDate");
    labelNewTaskDate.textContent = LABEL_DATE;
    form.appendChild(labelNewTaskDate);

    const inputNewTaskDate = document.createElement("input");
    inputNewTaskDate.type = "date";
    inputNewTaskDate.id = "new_task_input_date";
    // inputNewTaskDate.placeholder = "Task description";
    inputNewTaskDate.name = "taskDate";
    form.appendChild(inputNewTaskDate);

    // Parent list
    // const labelNewTaskDate = document.createElement('label');
    // labelNewTaskDate.setAttribute("for", "taskDate");
    // labelNewTaskDate.textContent = "Deadline"
    // form.appendChild(labelNewTaskDate);

    // const inputNewTaskDate = document.createElement('input');
    // inputNewTaskDate.type = 'date';
    // inputNewTaskDate.id = 'new_task_input_date';
    // inputNewTaskDate.placeholder = "Task description";
    // inputNewTaskDate.name = "taskDate";
    // form.appendChild(inputNewTaskDate);

    // Priority
    const labelNewTaskPriority = document.createElement("label");
    labelNewTaskPriority.setAttribute("for", "taskPriority");
    labelNewTaskPriority.textContent = LABEL_PRIORITY;
    form.appendChild(labelNewTaskPriority);

    const inputNewTaskPriority = document.createElement("input");
    inputNewTaskPriority.type = "text";
    inputNewTaskPriority.id = "new_task_input_priority";
    // inputNewTaskDate.placeholder = "Task description";
    inputNewTaskPriority.name = "taskPriority";
    form.appendChild(inputNewTaskPriority);

    const addBtn = document.createElement("input");
    addBtn.type = "submit";
    addBtn.id = "add_task_btn_form";
    addBtn.classList.add("btn-form");
    addBtn.value = "Accept";
    form.appendChild(addBtn);

    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.id = "cancel_btn_task_form";
    cancelBtn.classList.add("btn-form", "cancel");
    cancelBtn.textContent = "Cancel";
    form.appendChild(cancelBtn);

    popupForm.appendChild(form);

    return popupForm;
}

export function createSidePanelGroup(groupName, icon_path) {
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

export function createSidePanelList(listObject) {
    /**
     * Creates and returns the HTML element to use place in the side panel menu
     */
    const container = document.createElement("div");
    container.classList.add("list-box");

    const group = document.createElement("div");
    group.id = "sp_g_" + listObject.name;
    group.classList.add("sp-group");

    const icon = new Image();
    icon.src = anytimeIcon;
    icon.classList.add("sp-g-icon");
    group.appendChild(icon);

    const label = document.createElement("h3");
    label.classList.add("sp-g-label");
    label.textContent = listObject.name;
    group.appendChild(label);

    container.appendChild(group);

    const editList = document.createElement("button");
    editList.classList.add("btn-edit-list");
    const editIcon = new Image();
    editIcon.src = pencilIcon;
    editIcon.classList.add("list-controls");
    editIcon.setAttribute("editID", listObject.id);
    editIcon.addEventListener("click", searchListAndTogglePopup);
    editList.appendChild(editIcon);
    container.appendChild(editList);

    const deleteList = document.createElement("button");
    deleteList.classList.add("btn-delete-list");
    const deleteIcon = new Image();
    deleteIcon.src = trashIcon;
    deleteIcon.classList.add("list-controls");
    deleteIcon.id = listObject.id;
    // deleteIcon.addEventListener("click", searchAndDeleteTask);
    deleteList.appendChild(deleteIcon);
    container.appendChild(deleteList);

    return container;
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

    const POPUP_TITLE = "List properties";

    const popupForm = document.createElement("div");
    popupForm.id = "new_list_input_form";
    popupForm.classList.add("popup");

    const form = document.createElement("form");
    form.classList.add("form-container");

    const title = document.createElement("h1");
    title.classList.add("popup-title");
    title.textContent = POPUP_TITLE;
    form.appendChild(title);

    // const labelNewListName = document.createElement('label');
    // labelNewListName.setAttribute("for", "listName");
    // labelNewListName.textContent = "List name"
    // form.appendChild(labelNewListName);

    const inputNewListName = document.createElement("input");
    inputNewListName.type = "text";
    inputNewListName.id = "new_list_input_field_text";
    inputNewListName.placeholder = "List name";
    inputNewListName.name = "listName";
    form.appendChild(inputNewListName);

    const addBtn = document.createElement("button");
    addBtn.type = "button";
    addBtn.id = "add_list_btn_form";
    addBtn.classList.add("btn-form");
    addBtn.textContent = "Accept";
    form.appendChild(addBtn);

    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.id = "cancel_btn_form";
    cancelBtn.classList.add("btn-form");
    cancelBtn.classList.add("cancel");
    cancelBtn.textContent = "Cancel";
    form.appendChild(cancelBtn);

    popupForm.appendChild(form);

    return popupForm;
}
