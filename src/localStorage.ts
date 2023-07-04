export const loadState = (state: any) => {
    try {
        const serializedState = localStorage.getItem(state);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};


export const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('reduxStore', serializedState);
    } catch {
        console.log('Error saveState')
    }
};
