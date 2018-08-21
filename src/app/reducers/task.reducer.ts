import { ADD, REMOVE, MARK_AS_DONE } from '../actions/taskActions';
import { AppState } from "../app.state";
import { Reducer } from 'redux';



export const taskReducer:Reducer<AppState> = (state: AppState = { tasks: [] }, action: any): AppState => {
    switch(action.type){
        case ADD: {
            return {
                tasks: state.tasks.concat([
                    action.task
                ])
            };
        }
        case REMOVE: {
            let id =  action.id;
            
            return {
                tasks: state.tasks.filter((task) => task.getId() !== id)
            };
        }
        case MARK_AS_DONE: {
            let id =  action.id;
            let tasks = state.tasks.slice();

            tasks.find(x => x.getId() === id).markAsDone();

            return {
                tasks: tasks
            };
        }
        default : {
            return state;
        }
    }
}