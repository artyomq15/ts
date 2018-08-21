import { ADD_TASK, REMOVE_TASK, MARK_TASK_AS_DONE } from '../actions/task.actions';
import { AppState } from "../app.state";
import * as TaskActions from '../actions/task.actions';
import { Task } from '../task/task';



export const taskReducer = (state: AppState = { tasks: [] }, action: TaskActions.Actions): AppState => {
    switch(action.type){
        case TaskActions.ADD_TASK: {
            return {
                tasks: state.tasks.concat([(<Task>action.payload)])
            };
        }
        case TaskActions.REMOVE_TASK: {            
            return {
                tasks: state.tasks.filter((task) => task.getId() !== action.payload)
            };
        }
        case TaskActions.MARK_TASK_AS_DONE: {
            let tasks = state.tasks.slice();

            tasks.find(x => x.getId() === action.payload).markAsDone();

            return {
                tasks: tasks
            };
        }
        default : {
            return state;
        }
    }
}