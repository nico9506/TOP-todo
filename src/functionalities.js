/**
 * Collection of utilities as validations, classes and events
 */

export function addEvLToggleMenu() {
    /**
     * Add the eventListener to the menu icon to show and hide the
     * side panel element
     */

    const menu = document.getElementById("menuIcon");

    menu.addEventListener("click", toggleSidePanel);
}

function toggleSidePanel() {
    //CSS Class "hidden": change the grid layout
    document.body.classList.toggle("hidden");

    //CSS Class "side-panel-hidden": change display to 'none'
    document.getElementById("sidePanel").classList.toggle("side-panel-hidden");
}

function addNewList(listName) {
    /**
     * Generates a new list and append the list element to the sidePanel menu
     */

    
}
