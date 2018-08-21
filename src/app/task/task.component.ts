import { Component, Input } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
    selector: 'task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent{

    @Input() task: Task;

    constructor(private taskService: TaskService){
        
    }

    public delete(id: number): void{
        this.taskService.remove(id);
    }

    public markAsDone(id: number): void{
        this.taskService.markAsDone(id);
    }


}