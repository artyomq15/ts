import { Task } from "../task/task";
import { Action } from "@ngrx/store";


export const ADD: string = '[TASK] Add';
export const REMOVE: string = '[TASK] Remove';
export const MARK_AS_DONE: string = '[TASK] MARK_AS_DONE';

export class AddTask implements Action{
    readonly type = ADD
    constructor(public payload: Task){}
}

export class RemoveTask implements Action{
    readonly type = REMOVE
    constructor(public payload: number){}
}

export class MarkTaskAsDone implements Action{
    readonly type = MARK_AS_DONE
    constructor(public payload: number){}
}

export type Actions = AddTask | RemoveTask | MarkTaskAsDone;
