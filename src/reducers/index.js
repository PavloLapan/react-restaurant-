const UpdateDataList = (state, action) => {
  if (state === undefined) {
    return {
      data: [],
      dataMenu: [],
      loading: true,
      error: false,
      filteredDataMenu: [],
      menuFilter: "ALL"
    };
  }

  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false
      };

    case "FETCH_DATA_REQUEST":
      return {
        ...state,
        data: [],
        loading: true,
        error: null
      };

    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload
      };

    case "FILTER_MENU_ACTION":
      return {
        ...state,
        data: [],
        filteredDataMenu: action.payload
      };

    default:
      return state.DataList;
  }
};

const reducer = (state, action) => {
  return {
    DataList: UpdateDataList(state, action)
  };
};

export default reducer;
