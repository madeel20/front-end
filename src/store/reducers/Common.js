import Common from '../constants/Common';
const initialState = {
    loading: false
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case Common.ADD_ITEM:
            return { ...state, loading: action.loading };
        default:
            return state;
    }
};
