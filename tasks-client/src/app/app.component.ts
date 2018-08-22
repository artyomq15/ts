import { Component, Inject, Input, OnInit } from '@angular/core';
import { Task } from './task/Task';
import { TaskService } from './task/task.service';
import { select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as TaskActions from './actions/task.actions';



@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    public description: string = '';

    public tasks: Task[];
    public error: Error;

    constructor(private taskService: TaskService) {
        taskService.getStore()
            .pipe(select('task'))
            .subscribe(task => {
                this.tasks = task.tasks;
                this.error = task.error;
            });
    }

    ngOnInit(){
        this.taskService.getStore().dispatch(new TaskActions.LoadAllTasks({}));
    }

    addTask(){
        let description = this.description.trim();
        if (description === ''){
            description = 'unnamed';
        }

        this.taskService.getStore().dispatch(new TaskActions.AddTask(new Task(new Date().getTime(), description, false, new Date(), new Date())));
        this.description = '';
    }

}