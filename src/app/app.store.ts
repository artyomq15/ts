import { AppState } from "./app.state";
import { Store, createStore, compose, StoreEnhancer } from "redux";
import { taskReducer } from "./reducers/task.reducer";
import { InjectionToken } from "@angular/core";

const devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
  window['devToolsExtension']() : f => f;

export function createAppStore(): Store<AppState> {
  return createStore(
    taskReducer,
    compose(devtools)
  );
}

export const AppStore = new InjectionToken('App.store');
 
export const appStoreProviders = [
   { provide: AppStore, useFactory: createAppStore }
];