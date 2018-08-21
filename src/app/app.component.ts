import { Component, Inject, Input } from '@angular/core';
import { Task } from './task/task';
import { AppState } from './app.state';
import { TaskService } from './task/task.service';



@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent{

    public description: string = '';

    public tasks: Task[];

    constructor(private taskService: TaskService) {
        taskService.getStore().subscribe(() => this.readState());
        this.readState();
    }

    readState() {
        const state: AppState = this.taskService.getStore().getState() as AppState;
        this.tasks = state.tasks;
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