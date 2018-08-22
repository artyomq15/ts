import { Task } from "../task/Task";
import { Action } from "@ngrx/store";


export const ADD: string = '[TASK] Add';
export const ADD_SUCCESS: string = '[TASK] Add success';
export const ADD_FAIL: string = '[TASK] Add fail';

export const REMOVE: string = '[TASK] Remove';
export const REMOVE_FAIL: string = '[TASK] Remove fail';

export const UPDATE: string = '[TASK] Update';
export const UPDATE_FAIL: string = '[TASK] Update fail';

export const LOAD_ALL: string = '[TASK] Load all'; 
export const LOAD_ALL_COMPLETE: string = '[TASK] Load all complete';
export const LOAD_ALL_FAIL: string = '[TASK] Load all fail';

export class AddTask implements Action{
    readonly type = ADD;
    constructor(public payload: Task){}
}

export class AddTaskSuccess implements Action{
    readonly type = ADD_SUCCESS;
    constructor(public payload: any){}
}

export class AddTaskFail implements Action{
    readonly type = ADD_FAIL;
    constructor(public payload: Error){}
}

export class RemoveTask implements Action{
    readonly type = REMOVE;
    constructor(public payload: number){}
}

export class RemoveTaskFail implements Action{
    readonly type = REMOVE_FAIL;
    constructor(public payload: Error){}
}

export class UpdateTask implements Action{
    readonly type = UPDATE;
    constructor(public payload: Task){}
}

export class UpdateTaskFail implements Action{
    readonly type = UPDATE_FAIL;
    constructor(public payload: Error){}
}

export class LoadAllTasks implements Action{
    readonly type = LOAD_ALL;
    constructor(public payload: object){}
}

export class LoadAllTasksComplete implements Action{
    readonly type = LOAD_ALL_COMPLETE;
    constructor(public payload: Task[]){}
}

export class LoadAllTasksFail implements Action{
    readonly type = LOAD_ALL_FAIL;
    constructor(public payload: Error){}
}

export type Actions 
    = AddTask 
    | AddTaskSuccess
    | AddTaskFail
    | RemoveTask 
    | RemoveTaskFail
    | UpdateTask 
    | UpdateTaskFail
    | LoadAllTasks 
    | LoadAllTasksComplete
    | LoadAllTasksFail;
