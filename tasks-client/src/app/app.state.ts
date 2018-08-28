import { Task } from "./models/Task";

export interface AppState{
    tasks: Task[];
    error?: Error;
}

//export { AppState }