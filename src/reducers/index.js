import { initialMenuData } from '../actions';
import {filterMenuData} from '../actions';

const UpdateDataList = (state, action) => {

    if(state === undefined){
        return {
            data: [],
            dataMenu: [],
            loading: true,
            error: false
        }
    }

    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            };

        case 'FETCH_DATA_REQUEST':
                return {
                    ...state,
                    data: [],
                    loading: true,
                    error: null
                };


        case 'FETCH_DATA_FAILURE':
            return {
                ...state,
                data: [],
                loading: false,
                error: action.payload
            };

        case 'FETCH_MENU_DATA_FAILURE':
            return {
                ...state,
                dataMenu: [],
                error: action.payload
            };

  /*      case 'FETCH_MENU_SUCCESS':
                return {
                    ...state,
                    dataMenu: initialMenuData.map( ),
                    menuFilter: action.payload.filter
                    //filter?????
            }; */

            case 'SHOW_FILTERED_MENU':
                return {
                    ...state,
                    menuFilter: action.payload,
                    dataMenu: filterMenuData(action.payload)
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
