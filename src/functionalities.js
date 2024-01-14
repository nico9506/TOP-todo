/**
 * Collection of utilities as Constants, validations, functions and events
 */
import { priorityValues, listArray, tasksArray, Task,  TaskList } from "./model";
import pencilIcon from "./assets/edit.svg";
import trashIcon from "./assets/trash.svg";

export const NO_DATE = new Date(864000000000000);

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
    addNewTaskBtn.addEventListener("click", createTaskObjectFromPopupForm);
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
     */
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
    tasksArray.forEach(task => {
        taskPanel.appendChild(generateNewTaskElement(task));
    });
}

function createTaskObjectFromPopupForm() {
    /**
     * Creates a new Task using the form input fields of the NewTask popup
     */

    const taskNameForm = document.getElementById("new_task_input_name");
    const taskDescForm = document.getElementById("new_task_input_desc");
    const taskDateForm = document.getElementById("new_task_input_date");
    const taskPriorityForm = document.getElementById("new_task_input_priority");
    // const taskNameForm = document.getElementById("new_task_input_parent");

    addNewTask(taskNameForm.value, taskDescForm.value, taskDateForm.value, null, taskPriorityForm.value);

    refreshTasksView();

    toggleNewTaskPopup();
}

function generateNewTaskElement(taskObject) {
    /**
     * Takes a Task (class) element and
     * returns the HTML task container built with the task properties
     * name, dueDate, parentList, desc, priority
     */

    const taskContainer = document.createElement('div');
    taskContainer.classList.add("task-container");

    const taskName = document.createElement("h1");
    taskName.textContent = taskObject.name;
    taskName.classList.add('task-name');
    taskContainer.appendChild(taskName);

    const taskDateAndListContainer = document.createElement('div');
    taskDateAndListContainer.classList.add("task-date-list-info");
    
    const taskDate = document.createElement("h3");
    taskDate.classList.add("task-date");
    taskDate.textContent = taskObject.dueDate;
    taskDateAndListContainer.appendChild(taskDate);
    
    const taskParentList = document.createElement("h3");
    taskParentList.classList.add("task-parent-list");
    taskParentList.textContent = taskObject.taskParentList;
    taskDateAndListContainer.appendChild(taskParentList);

    const taskPriority = document.createElement("h3");
    taskPriority.classList.add("task-priority");
    taskPriority.textContent = taskObject.parentList;
    taskDateAndListContainer.appendChild(taskPriority);
    
    taskContainer.appendChild(taskDateAndListContainer);

    const taskDesc = document.createElement("p");
    taskDesc.classList.add("task-desc");
    taskDesc.textContent = taskObject.desc;
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
    deleteIcon.id = taskObject.id;
    deleteIcon.addEventListener('click', searchAndDeleteTask);
    deleteTask.appendChild(deleteIcon);
    taskContainer.appendChild(deleteTask);

    return taskContainer;
}

export function searchAndDeleteTask() {
    /**
     * Search for the Task with same ID as the button was clicked (which is the same TaskObject ID)
     * If there's a coincidence, the array's element is deleted
     */
    const index = 0;

    for (let i = 0; i < tasksArray.length; i++) {
        if (Object.values(tasksArray[i]).includes(this.id)) {
            index = i;
        }
    }

    if (index > -1) tasksArray.splice(index, 1);
    console.log("Deleted permanently: " + this.id);

    refreshTasksView();
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

