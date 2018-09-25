const _initialState = {
    status: 'DONE',
    cat: {}
};

 const reducer = (state = _initialState, action) => {
    switch (action.type) {
        case 'NEW_CAT':
            return Object.assign(
                {},
                state,
                {
                    cat: action.cat,
                    status: 'DONE',
                }
            );
        case 'NEW_CAT_LOADING':
            return Object.assign(
                {},
                state,
                {
                    status: 'LOADING',
                }
            );
        case 'NO_NEW_CAT':
            return Object.assign(
                {},
                state,
                {
                    cat: {},
                    status: 'FAILED',
                }
            );
        default:
            return state;
    }
}

export default reducer;