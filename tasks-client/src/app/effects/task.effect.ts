import { Injectable } from "@angular/core";

import { Effect, Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";

import * as taskActions from "../actions/task.actions";
import { TaskService } from "../task/task.service";
import { Task } from "../task/task";

@Injectable()
export class TaskEffects{

    constructor(private actions: Actions, private taskService: TaskService) { }

    @Effect()
    loadAll: Observable<Action> = this.actions
        .ofType(taskActions.LOAD_ALL)
        .pipe(
            map((action: taskActions.LoadAllTasks) => action.payload),
            switchMap(() => {
                return this.taskService.loadAllTasks()
                    .pipe(
                        map( (tasks: Task[]) => new taskActions.LoadAllTasksComplete(tasks) ),
                        catchError( (error) => of(new taskActions.LoadAllTasksFail(error)) )                        
                    )
                }
            )
        );

    @Effect()
    add = this.actions
        .ofType(taskActions.ADD)
        .pipe(
            map((action: taskActions.AddTask) => action.payload),
            switchMap((task) => {
                return this.taskService.add(task)
                    .pipe(
                        map( () => new taskActions.LoadAllTasks({}) ),
                        catchError( (error) => of(new taskActions.AddTaskFail(error)) )                        
                    )
                }
            )
        )

    @Effect()
    remove = this.actions
        .ofType(taskActions.REMOVE)
        .pipe(
            map((action: taskActions.RemoveTask) => action.payload),
            switchMap((id) => {
                return this.taskService.remove(id)
                    .pipe(
                        map( () => new taskActions.LoadAllTasks({}) ),
                        catchError( (error) => of(new taskActions.RemoveTaskFail(error)) )                        
                    )
                }
            )
        )

    @Effect()
    update = this.actions
        .ofType(taskActions.UPDATE)
        .pipe(
            map((action: taskActions.UpdateTask) => action.payload),
            switchMap((task) => {
                return this.taskService.update(task)
                    .pipe(
                        map( () => new taskActions.LoadAllTasks({}) ),
                        catchError( (error) => of(new taskActions.UpdateTaskFail(error)) )                        
                    )
                }
            )
        )
}