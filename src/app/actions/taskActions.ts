import { Task } from "../task/task";


const ADD: string = 'ADD';
const REMOVE: string = 'REMOVE';
const MARK_AS_DONE: string = 'MARK_AS_DONE';

const add = (task: Task) => ({
    type: ADD,
    task: task
});

const remove = (id: number) => ({
    type: REMOVE,
    id: id
});

const markAsDone = (id: number) => ({
    type: MARK_AS_DONE,
    id: id
});

export {
    ADD,
    REMOVE,
    MARK_AS_DONE,

    add,
    remove,
    markAsDone
}