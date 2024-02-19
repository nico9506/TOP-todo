import * as AppInterface from "./home.js";
import * as AppFunctionalities from "./functionalities.js";
import "./style.css";

(function generateWebPage() {
    /**
     * Load the components to create and print the HTML elements
     */

    const body = document.body;

    body.appendChild(AppInterface.generateNavigationBar());

    body.appendChild(AppInterface.generateSidePanel());

    try {
        AppFunctionalities.loadProjectsFromLocalStorage();
    } catch (error) {
        console.log("No PROJECTS in local storage found.");
    }
    
    AppFunctionalities.refreshListView();
    
    body.appendChild(AppInterface.generateMainPanel());

    body.appendChild(AppInterface.generateFooter());

    body.appendChild(AppInterface.generateNewTaskPopup());

    try {
        AppFunctionalities.loadTasksFromLocalStorage();
    } catch (error) {
        console.log("No TASKS in local storage found.");
    }

    AppFunctionalities.refreshTasksView();
})();

(function addEvListeners() {
    AppFunctionalities.addEvListeners();
})();
