import { Task } from "../task/task";
import { Action } from "@ngrx/store";


const ADD_TASK: string = '[TASK] Add';
const REMOVE_TASK: string = '[TASK] Remove';
const MARK_TASK_AS_DONE: string = '[TASK] MARK_AS_DONE';

export class AddTask implements Action{
    readonly type = ADD_TASK
    constructor(public payload: Task){}
}

export class RemoveTask implements Action{
    readonly type = REMOVE_TASK
    constructor(public payload: number){}
}

export class MarkTaskAsDone implements Action{
    readonly type = MARK_TASK_AS_DONE
    constructor(public payload: number){}
}

export type Actions = AddTask | RemoveTask | MarkTaskAsDone;

const add = (task: Task) => ({
    type: ADD_TASK,
    task: task
});

const remove = (id: number) => ({
    type: REMOVE_TASK,
    id: id
});

const markAsDone = (id: number) => ({
    type: MARK_TASK_AS_DONE,
    id: id
});

export {
    ADD_TASK,
    REMOVE_TASK,
    MARK_TASK_AS_DONE,

    add,
    remove,
    markAsDone
}