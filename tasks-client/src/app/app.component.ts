import { Component, OnInit } from '@angular/core';
import { Task } from './task/Task';
import { TaskService } from './task/task.service';
import { select, Store } from '@ngrx/store';
import * as TaskActions from './actions/task.actions';
import { AppState } from './app.state';



@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    public description: string = '';

    public tasks: Task[];
    public error: Error;

    constructor(private store: Store<AppState>, private taskService: TaskService) {
        store.pipe(select('task'))
            .subscribe(task => {
                this.tasks = task.tasks;
                this.error = task.error;
            });
    }

    ngOnInit(){
        this.store.dispatch(new TaskActions.LoadAllTasks({}));
    }

    addTask(){
        let description = this.description.trim();
        if (description === ''){
            description = 'unnamed';
        }

        this.store.dispatch(new TaskActions.AddTask(new Task(new Date().getTime(), description, false, new Date(), new Date())));
        this.description = '';
    }

}