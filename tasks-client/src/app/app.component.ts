import { Component, OnInit } from '@angular/core';
import { Task } from './models/Task';
import { TaskService } from './services/task.service';
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

    public num: number = 0;

    constructor(private store: Store<AppState>, private taskService: TaskService) {
        store.pipe(select('taskReducer'))
            .subscribe(task => {
                this.tasks = task.tasks;
                this.error = task.error;
            });
    }

    ngOnInit(){
        this.store.dispatch(new TaskActions.LoadAllTasks({}));
    }

    displayCount(count: number){
        this.num += count;
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