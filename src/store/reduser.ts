
// Actions
import { loadState } from "../localStorage";

// Action creators
export const setCount = (value: number) => ({ type: 'SET_COUNT', payload: value } as const);
export const setCountStart = (value: number) => ({ type: 'SET_COUNT_START', payload: value } as const);
export const setCountMax = (value: number) => ({ type: 'SET_COUNT_MAX', payload: value } as const);
export const setMessageFocus = (value: string) => ({ type: 'SET_MESSAGE_FOCUS', payload: value } as const);

// Reducers
const initialState = {
    count: loadState('countStart') || 0,
    countStart: loadState('countStart') || 0,
    countMax: loadState('countMax') || 0,
    messageFocus: '',
};


type ActionsType = ReturnType<typeof setCount>
    | ReturnType<typeof setCountStart>
    | ReturnType<typeof setCountMax>
    | ReturnType<typeof setMessageFocus>


const counterReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET_COUNT':
            return { ...state, count: action.payload };
        case 'SET_COUNT_START':
            return { ...state, countStart: action.payload };
        case 'SET_COUNT_MAX':
            return { ...state, countMax: action.payload };
        case 'SET_MESSAGE_FOCUS':
            return { ...state, messageFocus: action.payload };
        default:
            return state;
    }

}

export default counterReducer;

