import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { taskReducer } from './reducers/task.reducer';

import { EffectsModule } from '@ngrx/effects';
import { TaskEffects } from './effects/task.effect';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';

import { TaskService } from './task/task.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        StoreModule.forRoot({
            task: taskReducer
        }),
        EffectsModule.forRoot([TaskEffects])
    ],
    declarations: [AppComponent, TaskComponent],
    providers: [TaskService],
    bootstrap: [AppComponent]
})

export class AppModule{}
