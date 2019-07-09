import { createStore } from 'redux';

import reducer from './reducers';

const store = createStore(reducer);
setTimeout(()=>{
    console.log(store.getState())
},5000);
export default store;