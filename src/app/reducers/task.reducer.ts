import { AppState } from "../app.state";
import * as TaskActions from '../actions/task.actions';
import { Task } from '../task/task';

export const taskReducer = (state: AppState = { tasks: [] }, action: TaskActions.Actions): AppState => {
    switch(action.type){
        case TaskActions.ADD: {
            return {
                tasks: state.tasks.concat([(<Task>action.payload)])
            };
        }
        case TaskActions.REMOVE: {            
            return {
                tasks: state.tasks.filter((task: Task) => task.id !== action.payload)
            };
        }
        case TaskActions.MARK_AS_DONE: {
            let tasks = state.tasks.slice();

            tasks.find(x => x.id === action.payload).markAsDone();

            return {
                tasks: tasks
            };
        }
        default : {
            return state;
        }
    }
}