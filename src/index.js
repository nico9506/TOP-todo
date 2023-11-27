import {
    generateNavigationBar,
    generateFooter,
    generateSidePanel,
    generateMainPanel,
} from "./home";
import "./style.css";

(function generateWebPage() {
    /**
     * Load the components to create and print the HTML elements
     */

    const body = document.body;

    body.appendChild(generateNavigationBar());

    body.appendChild(generateSidePanel());

    body.appendChild(generateMainPanel());

    body.appendChild(generateFooter());
})();
