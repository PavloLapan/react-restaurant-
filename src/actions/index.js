const Requested=()=>{
    return{
        type: 'FETCH_DATA_REQUEST'
    }
};

export const foodRemove = (foodId) => {
    return{
        type: 'FOOD_REMOVE',
        payload: foodId
    }
};
export const foodDecrease = (foodId) => {
    return{
        type: 'FOOD_DECREASE',
        payload: foodId
    }
};
export const foodIncrease = (foodId) => {
    return{
        type: 'FOOD_ADDED',
        payload: foodId
    }
};

export const dataLoaded = (newData) =>{
    return{
        type: 'FETCH_DATA_SUCCESS',
        payload: newData
    }
};
const dataError = (error) =>{
    return{
        type: 'FETCH_DATA_FAILURE',
        payload: error
    }
};

export const fetchData = (serviceContext, dispatch ) => () => {
    dispatch(Requested());
    serviceContext.getData()
        .then((data) => dispatch(dataLoaded(data)))
        .catch((err) => dispatch(dataError(err)));
};
