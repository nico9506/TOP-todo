/**
 * Collection of utilities as Constants, validations, functions and events
 */

export const NO_DATE = new Date(864000000000000);

export function addEvLToggleMenu() {
    /**
     * Add the eventListener to the menu icon to show and hide the
     * side panel element
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
}

function toggleNewTaskPopup() {
    // CSS class
    document
        .getElementById("new_task_popup")
        .classList.toggle("popup-unhidden");
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

    //Clean the input field
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
