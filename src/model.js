/**
 * Task and list classes
 */

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
    constructor(
        taskName,
        taskDescription,
        dueDate,
        parentList,
        priority,
        taskId
    ) {
        this.taskName = taskName;
        this.taskDescription = taskDescription;
        this.dueDate = dueDate;
        this.parentList = parentList;
        this.priority = priority;
        this.taskId = taskId;
    }
}

export class TaskList {
    /**
     * Model to create the parent lists in the side-panel
     * @param {string} listName
     * @param {string} listId
     */
    constructor(listName, listId) {
        this.listName = listName;
        this.listId = listId;
    }
}
