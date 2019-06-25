import {} from '../actions'
const UpdateMenuData = (state, action)=>{
    switch (action.type) {
        case 'FETCH_MENU_SUCCESS':
            return {
                ...state,
                dataMenu: action.payload,
                filteredDataMenu: action.payload
            };
    }
}
export {UpdateMenuData}