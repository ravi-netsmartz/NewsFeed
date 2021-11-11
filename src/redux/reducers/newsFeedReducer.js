// Initial State
const initialState = {
  newsFeed: [],
  loadingFeed: false,
  totalRecords: 0
};

// Redux: Counter Reducer
const newsFeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEWS_RECEIVED': {
      return {
        ...state,
        newsFeed: action.data,
        loadingFeed: false,
        totalRecords: action.totalRecords
      };
    }
    case 'NEWS_FETCHING': {
      return {
        ...state,
        loadingFeed: action.value
      };
    }
    default: {
      return state;
    }
  }
};

// Exports
export default newsFeedReducer;