/**
 * Collection of utilities as Constants, validations, functions and events
 */
import { priorityValues, listArray, tasksArray, Task, TaskList } from "./model";
import pencilIcon from "./assets/edit.svg";
import trashIcon from "./assets/trash.svg";
import { createSidePanelList, generateNewTaskPopup } from "./home";

export const NO_DATE = new Date(864000000000000);

let lastID = ""; // ID of the last element edited
let lastListID = ""; // ID of the last list element edited

export function addEvListeners() {
    /**
     * Add the eventListener to the menu and buttons
     */

    // Burger menu which contains filters and lists
    const menu = document.getElementById("menuIcon");
    menu.addEventListener("click", toggleSidePanel);

    // Button in side-panel to open and close the New-List form
    const newListBtn = document.getElementById("btn-new_list");
    newListBtn.addEventListener("click", toggleNewListForm);

    // Button in input-form (new list) to cancel (close) the New-List form
    const cancelNewListForm = document.getElementById("cancel_btn_form");
    cancelNewListForm.addEventListener("click", toggleNewListForm);

    // Button New Task in navbar to show the popup form
    const newTaskForm = document.getElementById("btn-new_task");
    newTaskForm.addEventListener("click", toggleNewTaskPopup);

    // Button in input-form (new task) to cancel (close) the New-task form
    const cancelNewTaskForm = document.getElementById("cancel_btn_task_form");
    cancelNewTaskForm.addEventListener("click", toggleNewTaskPopup);

    // Button in input-form (new task) to create and add a new task
    const addNewTaskBtn = document.getElementById("add_task_btn_form");
    addNewTaskBtn.addEventListener(
        "click",
        createAndEditTaskObjectFromPopupForm
    );

    // Button in thw NewList form which add a new list
    const addNewListBtn = document.getElementById("add_list_btn_form");
    addNewListBtn.addEventListener("click", addNewList);
}

function toggleNewTaskPopup() {
    // CSS class to change the display parameter
    document
        .getElementById("new_task_popup")
        .classList.toggle("popup-unhidden");

    // Cleans the input fields
    const inputName = document.getElementById("new_task_input_name");
    inputName.value = "";

    const inputDesc = document.getElementById("new_task_input_desc");
    inputDesc.value = "";

    const inputDate = document.getElementById("new_task_input_date");
    inputDate.value = "";

    const inputPriority = document.getElementById("new_task_input_priority");
    inputPriority.value = "";

    const inputParentList = document.getElementById(
        "new_task_input_parent_list"
    );
    inputParentList.value = "";
}

function toggleSidePanel() {
    //CSS Class "hidden": change the grid layout
    document.body.classList.toggle("hidden");

    //CSS Class "side-panel-hidden": change display to 'none'
    document.getElementById("sidePanel").classList.toggle("side-panel-hidden");
}

function toggleNewListForm() {
    //Toggle class to show or hide the form
    document
        .getElementById("new_list_input_form")
        .classList.toggle("popup-unhidden");

    //Cleans the input field
    const input = document.getElementById("new_list_input_field_text");
    input.value = "";
}

function addNewList() {
    /**
     * Generates a new list and append the list element to the sidePanel menu
     *
     * The input value (list name) is validated to avoid duplicates
     */

    const newListName = document.getElementById(
        "new_list_input_field_text"
    ).value;

    let index = -Infinity;

    for (let i = 0; i < listArray.length; i++) {
        if (listArray[i].name === newListName) {
            console.log("Error: TaskList (name) already created.");
            alert("Name list currently in use!");
            return;
        }

        if (listArray[i].id == lastListID) {
            index = i;
        }
    }

    if (index > -1) {
        listArray[index].name = newListName;
    } else {
        listArray.push(new TaskList(newListName));
    }

    lastListID = "";

    toggleNewListForm();
    refreshListView();
    refreshTasksView();
}

export function uniqueID() {
    /**
     * Generates an unique ID. Used to identify each List or Task
     */
    return Math.floor(Math.random() * Date.now());
}

export function refreshTasksView() {
    /**
     * Clears the user interface and loads the current tasks array to
     * display them
     */

    const taskPanel = document.getElementById("task_panel");

    //const mainSection = document.getElementById("main_content");

    // Clears the task panel
    taskPanel.innerHTML = "";

    // Generates HTML elements from the actual tasks from the main array
    tasksArray.forEach((task) => {
        taskPanel.appendChild(generateNewTaskElement(task));
    });
}

function createAndEditTaskObjectFromPopupForm() {
    /**
     * If the Task ID does not exist, creates a new Task using the form input
     * fields of the NewTask popup. Otherwise, replaces the value properties of the
     * identified task
     */

    const taskNameForm = document.getElementById("new_task_input_name");
    const taskDescForm = document.getElementById("new_task_input_desc");
    const taskDateForm = document.getElementById("new_task_input_date");
    const taskPriorityForm = document.getElementById("new_task_input_priority");
    const taskProjectForm = document.getElementById(
        "new_task_input_parent_list"
    );

    /**
     * Search for the Task with same ID as the button was clicked (which is the same TaskObject ID)
     * If there's a coincidence, the element properties are overwritten.
     */
    let index = -Infinity;

    let parentListID = "";

    for (let i = 0; i < tasksArray.length; i++) {
        if (tasksArray[i].id === lastID) {
            index = i;
        }
    }

    if (index > -1) {
        const element = tasksArray[index];

        for (let i = 0; i < listArray.length; i++) {
            if (listArray[i].name == taskProjectForm.value)
                parentListID = listArray[i].id;
        }

        element.name = taskNameForm.value;
        element.desc = taskDescForm.value;
        element.dueDate = taskDateForm.value;
        element.priority = taskPriorityForm.value;
        element.parentList = parentListID;

        console.log("Edited: " + lastID);
    } else {
        for (let i = 0; i < listArray.length; i++) {
            if (listArray[i].name == taskProjectForm.value)
                parentListID = listArray[i].id;
        }

        addNewTask(
            taskNameForm.value,
            taskDescForm.value,
            taskDateForm.value,
            parentListID,
            taskPriorityForm.value
        );
    }

    lastID = "";

    toggleNewTaskPopup();

    refreshTasksView();
}

function generateNewTaskElement(taskObject) {
    /**
     * Takes a Task (class) element and
     * returns the HTML task container built with the task properties
     * name, dueDate, parentList, desc, priority
     */

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    console.log("taskObject.priority: " + taskObject.priority);

    switch (parseInt(taskObject.priority)) {
        case -1:
            taskContainer.classList.add("task-priority-low");
            break;

        case 0:
            taskContainer.classList.add("task-priority-medium");
            break;

        case 1:
            taskContainer.classList.add("task-priority-high");
            break;

        default:
            break;
    }

    const taskName = document.createElement("h1");
    taskName.textContent = taskObject.name;
    taskName.classList.add("task-name");
    taskContainer.appendChild(taskName);

    const taskDateAndListContainer = document.createElement("div");
    taskDateAndListContainer.classList.add("task-date-list-info");

    const taskDate = document.createElement("h3");
    taskDate.classList.add("task-date");
    taskDate.textContent = taskObject.dueDate;
    taskDateAndListContainer.appendChild(taskDate);

    // To update parent list in task attributes when this is modified
    const taskParentList = document.createElement("h3");
    taskParentList.classList.add("task-parent-list");

    for (let i = 0; i < listArray.length; i++) {
        if (listArray[i].id == taskObject.parentList)
            taskParentList.textContent = listArray[i].name;
    }

    taskDateAndListContainer.appendChild(taskParentList);

    // const taskPriority = document.createElement("h3");
    // taskPriority.classList.add("task-priority");
    // taskPriority.textContent = taskObject.priority;
    // taskDateAndListContainer.appendChild(taskPriority);

    taskContainer.appendChild(taskDateAndListContainer);

    const taskDesc = document.createElement("p");
    taskDesc.classList.add("task-desc");
    taskDesc.textContent = taskObject.desc;
    taskContainer.appendChild(taskDesc);

    const editTask = document.createElement("button");
    editTask.classList.add("btn-edit-task");
    const editIcon = new Image();
    editIcon.src = pencilIcon;
    editIcon.classList.add("task-controls");
    editIcon.setAttribute("editID", taskObject.id);
    editIcon.addEventListener("click", searchTaskAndTogglePopup);
    editTask.appendChild(editIcon);
    taskContainer.appendChild(editTask);

    const deleteTask = document.createElement("button");
    deleteTask.classList.add("btn-delete-task");
    const deleteIcon = new Image();
    deleteIcon.src = trashIcon;
    deleteIcon.classList.add("task-controls");
    deleteIcon.id = taskObject.id;
    deleteIcon.addEventListener("click", searchAndDeleteTask);
    deleteTask.appendChild(deleteIcon);
    taskContainer.appendChild(deleteTask);

    return taskContainer;
}

function searchAndDeleteTask() {
    /**
     * Search for the Task with same ID as the button was clicked (which is the same TaskObject ID)
     * If there's a coincidence, the array's element is deleted
     */
    for (let i = 0; i < tasksArray.length; i++) {
        if (tasksArray[i].id == this.id) {
            tasksArray.splice(i, 1);
            console.log("Deleted permanently: " + this.id);
            break;
        }
    }

    refreshTasksView();
}

function searchTaskAndTogglePopup() {
    /**
     * Search for the actual task and fill up the popup form.
     * The task attributes are replaced with the final form values.
     */
    let index = -Infinity;

    lastID = this.getAttribute("editID");

    for (let i = 0; i < tasksArray.length; i++) {
        if (tasksArray[i].id === lastID) {
            index = i;
        }
    }

    if (index > -1) {
        const element = tasksArray[index];

        const taskNameForm = document.getElementById("new_task_input_name");
        const taskDescForm = document.getElementById("new_task_input_desc");
        const taskDateForm = document.getElementById("new_task_input_date");
        const taskPriorityForm = document.getElementById(
            "new_task_input_priority"
        );
        const taskParentList = document.getElementById(
            "new_task_input_parent_list"
        );

        let parentListName = "";

        for (let i = 0; i < listArray.length; i++) {
            if (listArray[i].id == element.parentList)
                parentListName = listArray[i].name;
        }

        toggleNewTaskPopup();

        taskNameForm.value = element.name;
        taskDescForm.value = element.desc;
        taskDateForm.value = element.dueDate;
        taskPriorityForm.value = element.priority;
        taskParentList.value = parentListName;

        console.log("element.parentList: " + element.parentList);

        console.log("Popup refilled with: " + lastID);
    }
}

function addNewTask(
    /**
     * Creates a new Task object before adding it to the taskArray[]
     */
    name,
    description = "",
    dueDate = NO_DATE,
    parentList = "General",
    priority = priorityValues.MEDIUM
) {
    const newTask = new Task(name, description, dueDate, parentList, priority);
    tasksArray.push(newTask);
    console.log("New task added to array: " + newTask.id);
}

export function refreshListView() {
    /**
     * Deletes and creates the task list in the side panel using the listArray
     */
    try {
        document.getElementById("sidePanel-lists").remove();
    } catch (error) {
        console.log("element ID: sidePanel-lists DOES NOT EXIST");
    }

    const sidePanelLists = document.createElement("div");
    sidePanelLists.id = "sidePanel-lists";

    listArray.forEach((list) => {
        sidePanelLists.appendChild(createSidePanelList(list));
    });

    document.getElementById("sidePanel").appendChild(sidePanelLists);

    // Deletes and creates the popup to refresh the Select element values (parentList)
    try {
        document.getElementById("new_task_popup").remove();

        document.body.appendChild(generateNewTaskPopup());

        // Button in input-form (new task) to cancel (close) the New-task form
        const cancelNewTaskForm = document.getElementById(
            "cancel_btn_task_form"
        );
        cancelNewTaskForm.addEventListener("click", toggleNewTaskPopup);

        // Button in input-form (new task) to create and add a new task
        const addNewTaskBtn = document.getElementById("add_task_btn_form");
        addNewTaskBtn.addEventListener(
            "click",
            createAndEditTaskObjectFromPopupForm
        );
    } catch (error) {
        console.log("element ID: new_task_popup DOES NOT EXIST");
    }
}

export function searchAndDeleteList() {
    /**
     * Search for the List with same ID as the button which was clicked (same List Object ID)
     * If there's a coincidence, the array's element is deleted
     */

    for (let i = 0; i < listArray.length; i++) {
        if (listArray[i].id == this.id) {
            listArray.splice(i, 1);
            console.log("Deleted permanently: " + this.id);
            break;
        }
    }

    refreshListView();
}

export function searchListAndTogglePopup() {
    /**
     * Search for the actual List and fill up the popup form.
     * The list attributes are replaced with the final form values.
     */
    let index = -Infinity;

    lastListID = this.getAttribute("editID");

    for (let i = 0; i < listArray.length; i++) {
        if (listArray[i].id === lastListID) {
            index = i;
        }
    }

    console.log(index);

    if (index > -1) {
        const element = listArray[index];

        const listNameForm = document.getElementById(
            "new_list_input_field_text"
        );

        // To avoid closing de form after clicking other list edit button when the popup is unhidden
        document
            .getElementById("new_list_input_form")
            .classList.remove("popup-unhidden");

        toggleNewListForm();

        listNameForm.value = element.name;

        console.log("Popup refilled with: " + lastID);
    }
}

export function generateOptionFromList(list) {
    /**
     * Used to create an option from an actual list to be appended in a Select element
     */
    const option = document.createElement("option");
    option.value = list.name;
    option.innerText = list.name;

    return option;
}
