import { loadState, saveState } from "../localStorage";
import { legacy_createStore } from "redux";
import counterReducer from "./reduser";

const persistedState = loadState('reduxStore');
export const store = legacy_createStore(
    // @ts-ignore
    counterReducer,
    persistedState
);

store.subscribe(() => {
    saveState({
        count: store.getState().count,
        countStart: store.getState().countStart,
        countMax: store.getState().countMax,
        messageFocus: store.getState().messageFocus
    });
})
