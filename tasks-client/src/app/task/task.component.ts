import { Component, Input } from '@angular/core';
import { Task } from './Task';
import { TaskService } from './task.service';
import * as TaskActions from '../actions/task.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
    selector: 'task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent{

    @Input() task: Task;

    constructor(private store: Store<AppState>, private taskService: TaskService){
        
    }

    public delete(id: number): void{
        this.store.dispatch(new TaskActions.RemoveTask(id));
    }

    public markAsDone(task: Task): void{
        this.store.dispatch(new TaskActions.UpdateTask(Object.assign({}, task, {isDone: true})));
    }


}