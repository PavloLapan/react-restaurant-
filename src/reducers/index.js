

const UpdateDataList = (state, action) => {

    if(state === undefined){
        return {
            books: [],
            loading: true,
            error: false
        }
    }

    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return {
                data: action.payload,
                loading: false,
                error: false
            };

        case 'FETCH_DATA_REQUEST':
            return {
                data: [],
                loading: true,
                error: null
            };

        case 'FETCH_DATA_FAILURE':
            return {
                data: [],
                loading: false,
                error: action.payload
            };
        default :
            return state.DataList;

    }
};

const reducer = (state, action) => {
    return {
        DataList: UpdateDataList(state, action)
    }
};

export default reducer;
