/**
 * Task and list classes.
 * Included DB (arrays of tasks and lists)
 */
import { uniqueID } from "./functionalities";
import { NO_DATE } from "./functionalities";

export class Task {
    /**
     * Task class to model them in the user interface
     * @param {string} taskName
     * @param {string} taskDescription
     * @param {Date} dueDate
     * @param {TaskList} parentList
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
        parentList = "general",
        priority = "medium"
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

// Array to contain all created tasks
export const tasksArray = [];

export function addNewTask(
    name,
    description = "",
    dueDate = NO_DATE,
    parentList = "General",
    priority = 0
) {
    const newTask = new Task(name, description, dueDate, parentList, priority);
    tasksArray.push(newTask);
    console.log("New task added to array: " + newTask.id);
}

// Array to contain all created taskLists.
// Contains the list 'General' by default. This list will be linked to the Home (side-panel menu)
export const listArray = [new TaskList("General")];
