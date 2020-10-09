const authenticationReducer = (state = false, action) => {
    switch (action.type) {
        case 'toggle':
            return state;
        default:
            return false;
    }
};
export default authenticationReducer;