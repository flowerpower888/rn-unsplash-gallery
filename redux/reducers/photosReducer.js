const initialState = {
    data: '',
    loading: false,
    error: false,
};

const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUESTED_PHOTOS':
            return {
                data: '',
                loading: true,
                error: false,
            };
        case 'REQUESTED_PHOTOS_SUCCEEDED':
            return {
                data: action.data,
                loading: false,
                error: false,
            };
        case 'REQUESTED_PHOTOS_FAILED':
            return {
                data: '',
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};

export default photosReducer