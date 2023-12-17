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

    // Main container to organize multiple task containers
    const taskSection = document.createElement('div');
    taskSection.classList.add("tasks-section");

    // Dummy tasks to test CSS
    taskSection.appendChild(generateNewTaskElement("testName 1", "01-01-24", "urgent", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac molestie ante, nec blandit justo. Donec nibh quam, mattis quis nisl vitae, hendrerit rhoncus ante.", "high"));

    taskSection.appendChild(generateNewTaskElement("testName 2", "05-12-24", "projects", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac molestie ante, nec blandit justo. Donec nibh quam, mattis quis nisl vitae, hendrerit rhoncus ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac molestie ante, nec blandit justo. Donec nibh quam, mattis quis nisl vitae, hendrerit rhoncus ante.", "normal"));

    taskSection.appendChild(generateNewTaskElement("testName 3: : Long task name test to see the grid box behaviour", "12-05-25", "projects", "This a test description", "low"));

    taskSection.appendChild(generateNewTaskElement("testName 4", "05-12-24", "projects", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac molestie ante, nec blandit justo. Donec nibh quam, mattis quis nisl vitae, hendrerit rhoncus ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac molestie ante, nec blandit justo. Donec nibh quam, mattis quis nisl vitae, hendrerit rhoncus ante.", "normal"));
    // End of dummy tasks

    mainPanel.appendChild(taskSection);

    return mainPanel;
}

export function generateNewTaskPopup() {
    /**
     * Generates the HTML element box containing the proper fields 
     * to create TASKS
     */

    const POPUP_TITLE = "Add a new Task!";
    const LABEL_NAME = "Task name";
    const LABEL_DESC = "Description";
    const LABEL_DATE = "Deadline";
    const LABEL_PRIORITY = "Priority";

    const popupForm = document.createElement('div');
    popupForm.id = "new_task_popup";
    popupForm.classList.add("popup-task");

    const form = document.createElement('form');
    form.classList.add('form-container');

    const title = document.createElement('h1');
    title.classList.add("popup-title");
    title.textContent = POPUP_TITLE;
    form.appendChild(title);


    // Name
    const labelNewTaskName = document.createElement('label');
    labelNewTaskName.setAttribute("for", "taskName");
    labelNewTaskName.textContent = LABEL_NAME;
    form.appendChild(labelNewTaskName);

    const inputNewTaskName = document.createElement('input');
    inputNewTaskName.type = 'text';
    inputNewTaskName.id = 'new_task_input_name';
    inputNewTaskName.placeholder = "New task name";
    inputNewTaskName.name = "taskName";
    form.appendChild(inputNewTaskName);

    // Description
    const labelNewTaskDesc = document.createElement('label');
    labelNewTaskDesc.setAttribute("for", "taskDesc");
    labelNewTaskDesc.textContent = LABEL_DESC;
    form.appendChild(labelNewTaskDesc);

    const inputNewTaskDesc = document.createElement('input');
    inputNewTaskDesc.type = 'text';
    inputNewTaskDesc.id = 'new_task_input_desc';
    inputNewTaskDesc.placeholder = "Task description";
    inputNewTaskDesc.name = "taskDesc";
    form.appendChild(inputNewTaskDesc);

    // Due date
    const labelNewTaskDate = document.createElement('label');
    labelNewTaskDate.setAttribute("for", "taskDate");
    labelNewTaskDate.textContent = LABEL_DATE;
    form.appendChild(labelNewTaskDate);

    const inputNewTaskDate = document.createElement('input');
    inputNewTaskDate.type = 'date';
    inputNewTaskDate.id = 'new_task_input_date';
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
    const labelNewTaskPriority = document.createElement('label');
    labelNewTaskPriority.setAttribute("for", "taskPriority");
    labelNewTaskPriority.textContent = LABEL_PRIORITY;
    form.appendChild(labelNewTaskPriority);

    const inputNewTaskPriority = document.createElement('input');
    inputNewTaskPriority.type = 'text';
    inputNewTaskPriority.id = 'new_task_input_priority';
    // inputNewTaskDate.placeholder = "Task description";
    inputNewTaskPriority.name = "taskPriority";
    form.appendChild(inputNewTaskPriority);

    const addBtn = document.createElement('button');
    addBtn.type = "button";
    addBtn.id = "add_task_btn_form";
    addBtn.classList.add("btn-form");
    addBtn.textContent = "Add";
    form.appendChild(addBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.type = "button";
    cancelBtn.id = "cancel_btn_task_form";
    cancelBtn.classList.add("btn-form", "cancel");
    cancelBtn.textContent = "Cancel";
    form.appendChild(cancelBtn);

    popupForm.appendChild(form);

    return popupForm;
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

function generateNewTaskElement(name, dueDate, parentList, desc, priority) {
    /**
     * Returns the HTML task container with the indicated values
     */

    const taskContainer = document.createElement('div');
    taskContainer.classList.add("task-container");

    const taskName = document.createElement("h1");
    taskName.textContent = name;
    taskName.classList.add('task-name');
    taskContainer.appendChild(taskName);

    const taskDateAndListContainer = document.createElement('div');
    taskDateAndListContainer.classList.add("task-date-list-info");
    
    const taskDate = document.createElement("h3");
    taskDate.classList.add("task-date");
    taskDate.textContent = dueDate;
    taskDateAndListContainer.appendChild(taskDate);
    
    const taskParentList = document.createElement("h3");
    taskParentList.classList.add("task-parent-list");
    taskParentList.textContent = parentList;
    taskDateAndListContainer.appendChild(taskParentList);

    const taskPriority = document.createElement("h3");
    taskPriority.classList.add("task-priority");
    taskPriority.textContent = priority;
    taskDateAndListContainer.appendChild(taskPriority);
    
    taskContainer.appendChild(taskDateAndListContainer);

    const taskDesc = document.createElement("p");
    taskDesc.classList.add("task-desc");
    taskDesc.textContent = desc;
    taskContainer.appendChild(taskDesc);

    const editTask = document.createElement('button');
    editTask.classList.add('btn-edit-task');
    const editIcon = new Image();
    editIcon.src = pencilIcon;
    editIcon.classList.add("task-controls");
    editTask.appendChild(editIcon);
    taskContainer.appendChild(editTask);

    const deleteTask = document.createElement('button');
    deleteTask.classList.add('btn-delete-task');
    const deleteIcon = new Image();
    deleteIcon.src = trashIcon;
    deleteIcon.classList.add("task-controls");
    deleteTask.appendChild(deleteIcon);
    taskContainer.appendChild(deleteTask);

    return taskContainer;
}