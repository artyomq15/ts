import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as TaskActions from '../actions/task.actions';
import { Task } from './task';

@Injectable()
export class TaskService{

    constructor(private store: Store<AppState>){

    }

    public getStore(){
        return this.store;
    }

    public add(task: Task){
        this.store.dispatch(new TaskActions.AddTask(task));
    }

    public remove(id: number){
        this.store.dispatch(new TaskActions.RemoveTask(id));
    }

    public markAsDone(id: number){
        this.store.dispatch(new TaskActions.MarkTaskAsDone(id));
    }

}
