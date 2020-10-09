const basketReducer = (state = [], action) => {
    switch (action.type) {
        case 'check':
            return [...state,action.data];
        default:
            return state;
    }
};
export default basketReducer;