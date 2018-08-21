import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { taskReducer } from './reducers/task.reducer';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';

import { TaskService } from './task/task.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        StoreModule.forRoot({
            task: taskReducer
        })
    ],
    declarations: [AppComponent, TaskComponent],
    providers: [TaskService],
    bootstrap: [AppComponent]
})

export class AppModule{}
