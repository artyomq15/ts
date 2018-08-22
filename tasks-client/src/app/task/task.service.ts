import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './Task';

@Injectable()
export class TaskService{

    constructor(private http: HttpClient){

    }

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
