import { Injectable, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppState } from '../app.state';
import { add, remove, markAsDone } from '../actions/taskActions';
import { Task } from './task';
import { AppStore } from '../app.store';

@Injectable()
export class TaskService{

    constructor(@Inject(AppStore) private store: Store<AppState>){

    }

    public getStore(){
        return this.store;
    }

    public add(task: Task){
        this.store.dispatch(add(task));
    }

    public remove(id: number){
        this.store.dispatch(remove(id));
    }

    public markAsDone(id: number){
        this.store.dispatch(markAsDone(id));
    }

}
