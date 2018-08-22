import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as TaskActions from '../actions/task.actions';
import { Task } from './Task';
import { map } from 'rxjs/operators';


@Injectable()
export class TaskService{

    constructor(private store: Store<AppState>, private http: HttpClient){

    }

    public getStore(){
        return this.store;
    }

    /*public remove(id: number){
        this.store.dispatch(new TaskActions.RemoveTask(id));
    }*/

    /*public markAsDone(id: number){
        this.store.dispatch(new TaskActions.MarkTaskAsDone(id));
    }*/



    /////

    private REST_SERVICE_URI = 'http://localhost:3000/task';

    public loadAllTasks(){
        return this.http.get(this.REST_SERVICE_URI);
    }

    public add(task: Task){
        return this.http.post(this.REST_SERVICE_URI, task);
    }

    public remove(id: number){
        return this.http.delete(this.REST_SERVICE_URI + '/' + id);
    }

    public update(task: Task){
        return this.http.put(this.REST_SERVICE_URI + '/' + task.id, task);
    }

}
