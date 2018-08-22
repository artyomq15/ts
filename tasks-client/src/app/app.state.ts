import { Task } from "./models/Task";

interface AppState{
    tasks: Task[];
    error?: Error;
}

export { AppState }