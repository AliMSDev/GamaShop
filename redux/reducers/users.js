const usersReducer = (state = [], action) => {
    switch (action.type) {
        case 'signup':
            return [...state,action.data];
        default:
            return state;
    }
};
export default usersReducer;