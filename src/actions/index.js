const Requested=()=>{
    return{
        type: 'FETCH_DATA_REQUEST'
    }
};


export const dataLoaded = (newData) =>{
    return{
        type: 'FETCH_DATA_SUCCESS',
        payload: newData
    }
};
export const dataError = (error) =>{
    return{
        type: 'FETCH_DATA_FAILURE',
        payload: error
    }
};



export  const showFilteredMenu = (category)=>
  {
      return{
      type: 'ALL',
      payload: category.all
      }
  };

export  const showMenu = (menuData) => {
    return{
      type: 'SHOW_MENU_SUCCESS',
      payload: menuData
    }
  };


export  const menuError = (error) =>{
    return{
        type: 'FETCH_MENU_DATA_FAILURE',
        payload: error
    }
};


export const fetchData = (serviceContext, dispatch ) => () => {
    dispatch(Requested());
    serviceContext.getData()
        .then((data) => dispatch(dataLoaded(data)))
        .catch((err) => dispatch(dataError(err)));
};



// var initialMenuData=fetchMenuData(Service, dispatch);
//
//
// const filterMenuData = (selectedCategory) =>
// {
// var filteredMenuData = initialMenuData.reduce((filteredMenuData,item)=>
// {
//     if (item.category===selectedCategory)
//     {
//         filteredMenuData.push(item);
//     }
//     return filteredMenuData;
// },[]);
//     return filteredMenuData;
// };

