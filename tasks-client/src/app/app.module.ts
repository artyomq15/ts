import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';

import { TaskService } from './services/task.service';

import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [AppComponent, TaskComponent],
    providers: [TaskService],
    bootstrap: [AppComponent]
})

export class AppModule{}
