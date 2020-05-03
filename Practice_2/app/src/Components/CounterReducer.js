const reducer = (state, action) => {
    switch (action) {
        case '+10': return state + 10;
        case '+25': return state + 25;
        case '+100': return state + 100;
        case '-25': return state - 25;
        case 'reset': return 0;
        default: throw new Error('Unexpected action');
    }
};

export default reducer;