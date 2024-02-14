/**
 * Task and list classes.
 * Included DB (arrays of tasks and lists)
 */
import { NO_DATE } from "./functionalities";
import { uniqueID } from "./functionalities";

export class Task {
    /**
     * Task class to model them in the user interface
     * @param {string} taskName
     * @param {string} taskDescription
     * @param {Date} dueDate
     * @param {string} parentListID
     * @param {string} priority
     * @param {string} taskId
     */

    #_taskName;
    #_taskDescription;
    #_dueDate;
    #_parentList;
    #_priority;
    #_taskId;

    constructor(
        taskName,
        taskDescription = "",
        dueDate = NO_DATE,
        parentList = "General",
        priority = priorityValues.MEDIUM
    ) {
        this.#_taskName = taskName;
        this.#_taskDescription = taskDescription;
        this.#_dueDate = dueDate;
        this.#_parentList = parentList;
        this.#_priority = priority;
        this.#_taskId = "task_" + uniqueID();
    }

    /**
     * Getters ans Setters
     */

    get name() {
        return this.#_taskName;
    }

    set name(newName) {
        this.#_taskName = newName;
    }

    get desc() {
        return this.#_taskDescription;
    }

    set desc(newDesc) {
        this.#_taskDescription = newDesc;
    }

    get dueDate() {
        return this.#_dueDate;
    }

    set dueDate(newDate) {
        this.#_dueDate = newDate;
    }

    get parentList() {
        return this.#_parentList;
    }

    set parentList(list) {
        this.#_parentList = list;
    }

    get priority() {
        return this.#_priority;
    }

    set priority(newPriority) {
        this.#_priority = newPriority;
    }

    get id() {
        return this.#_taskId;
    }
}

export class TaskList {
    /**
     * Model to create the parent lists in the side-panel
     * @param {string} listName
     * @param {string} listId
     */

    #_listName;
    #_listId;

    constructor(listName) {
        this.#_listName = listName;
        this.#_listId = "list_" + uniqueID();
    }

    /**
     * Getters ans Setters
     */

    get name() {
        return this.#_listName;
    }

    set name(newName) {
        this.#_listName = newName;
    }

    get id() {
        return this.#_listId;
    }
}

// Task priority values
export const priorityValues = Object.freeze({
    LOW: -1,
    MEDIUM: 0,
    HIGH: 1,
});

// Used as global variable to filter the shown tasks by dueDate. 
// "today", "upcoming" (up to 7 days), "anytime"
export let tasksDateFilter = "anytime";

// Used as global variable to filter the shown tasks by ParentList. 
// "" default value. This value is replaced by the parentList ID to filter the tasks
export let tasksProjectFilter = "";

// Array to contain all created tasks
export const tasksArray = [];

// Array to contain all created taskLists.
// Contains the list 'General' by default. This list will be linked to the Home (side-panel menu)
export const listArray = [];
