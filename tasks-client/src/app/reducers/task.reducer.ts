import { AppState } from "../app.state";
import * as TaskActions from '../actions/task.actions';
import { Task } from '../models/Task';

export const taskReducer = (state: AppState = { tasks: [] }, action: TaskActions.Actions): AppState => {
    switch(action.type){

        case TaskActions.LOAD_ALL_COMPLETE: {
            return {               
                tasks: (<Task[]>action.payload).map(
                    task => new Task(task.id, task.description, task.isDone, task.dateFrom, task.dateTo)
                )
            };
        }

        case TaskActions.ADD_FAIL:
        case TaskActions.REMOVE_FAIL:
        case TaskActions.UPDATE_FAIL:
        case TaskActions.LOAD_ALL_FAIL: {
            return {
                tasks: [],
                error: <Error>action.payload
            };
        }

        default : {
            return state;
        }
    }
}