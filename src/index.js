import * as AppInterface from "./home.js";
import * as AppFunctionalities from "./functionalities.js";
import * as Model from "./model.js";
import "./style.css";

(function generateWebPage() {
    /**
     * Load the components to create and print the HTML elements
     */

    const body = document.body;

    body.appendChild(AppInterface.generateNavigationBar());

    body.appendChild(AppInterface.generateSidePanel());

    body.appendChild(AppInterface.generateMainPanel());

    body.appendChild(AppInterface.generateFooter());

    body.appendChild(AppInterface.generateNewTaskPopup());

    AppFunctionalities.refreshTasksView();

    Model.addNewTask("name test", "desc test", "01 01 23");

    AppFunctionalities.refreshTasksView();
})();

(function addEvListeners() {
    AppFunctionalities.addEvListeners();
})();
