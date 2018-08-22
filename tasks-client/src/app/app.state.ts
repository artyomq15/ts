import { Task } from "./task/Task";

interface AppState{
    tasks: Task[];
    error?: Error;
}

export { AppState }