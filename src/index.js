import generateNavigationBar from './home';
import './style.css';

(function generateWebPage() {
    /**
     * Load the components to create and print the HTML elements
     */

    const body = document.body;

    body.appendChild(generateNavigationBar());
})();