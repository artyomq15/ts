import { Component, Inject, Input } from '@angular/core';
import { Task } from './task/task';
import { TaskService } from './task/task.service';
import { select } from '@ngrx/store';
import { Observable } from 'rxjs';



@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent{

    public description: string = '';

    public tasks: Task[];

    constructor(private taskService: TaskService) {
        taskService.getStore()
            .pipe(select('task'))
            .subscribe(task => {
                this.tasks = task.tasks;
            });
    }

    addTask(){
        let description = this.description.trim();
        if (description === ''){
            description = 'unnamed';
        }
        this.taskService.add(new Task(new Date().getTime(), description, new Date(), new Date()));
        this.description = '';
    }

}