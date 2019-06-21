import { initialMenuData } from '../actions';
import { filterMenuData } from '../actions';
filterMenuData = function(menuData, selectedCategory) {
    if (selectedCategory === "ALL") {
        return menuData;
    }
    return menuData.filter(item => item.category === selectedCategory);
}
const UpdateDataList = (state, action) => {

    if (state === undefined) {
        return {
            data: [],
            dataMenu: [],
            loading: true,
            error: false,
            filteredDataMenu: [],
            menuFilter: "ALL",

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

        case 'FETCH_MENU_SUCCESS':
            return {
                ...state,
                dataMenu: action.payload,
                filteredDataMenu: action.payload
            };

        case 'SHOW_FILTERED_MENU':
            return {
                ...state,
                menuFilter: action.payload,
                filteredDataMenu: filterMenuData(state.dataMenu, action.payload)
            };

        default:
            return state.DataList;

    }
};

const UpdateShoppingCart = (state, action) => {

    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        }
    }

    switch (action.type) {
        case 'FOOD_ADDED':
            return UpdateOrder(state, action.payload, 1);

        case 'FOOD_REMOVE':
            const item = state.shippingCart.cartItems.find(({ id }) => id === action.payload);
            return UpdateOrder(state, action.payload, -item.count);

        case 'FOOD_DECREASE':
            return UpdateOrder(state, action.payload, -1);

        default:
            return state.shippingCart;
    }
};


const UpdateCartItems = (cartItems, item, idx) => {

    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
};

const updateItem = (food, item = {}, quantity) => {

    const { id = food.id, title = food.title, total = 0, count = 0, } = item;

    return {
        id,
        title,
        total: total + quantity * food.price,
        count: count + quantity,
    }
};

const UpdateOrder = (state, foodId, quantity) => {
    console.log(state);
    const { foodList: { foood }, shippingCart: { cartItems } } = state;

    const food = foood.find((food) => food.id === foodId);

    const stateIndex = cartItems.findIndex(({ id }) => id === food.id);
    const item = cartItems[stateIndex];

    const newItem = updateItem(food, item, quantity);

    return {
        orderTotal: 0,
        cartItems: UpdateCartItems(cartItems, newItem, stateIndex)
    }
};

const reducer = (state, action) => {
    return {
        DataList: UpdateDataList(state, action),
        shippingCart: UpdateShoppingCart(state, action)
    }
};

export default reducer;