import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { appStoreProviders } from './app.store';
import { TaskService } from './task/task.service';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, TaskComponent],
    providers: [ appStoreProviders , TaskService],
    bootstrap: [AppComponent]
})

export class AppModule{}
