import * as actionTypes from '../types'

const initialState = {
  loading: false,
  error: '',
}

const FicReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SCROLL_TO_SEC_2:
      return {
        ...state,
        ScrollToSec2Res: action.response,
      }
    case actionTypes.SCROLL_TO_ID:
      return {
        ...state,
        DataScrollToSec: action.response,
      }


    // list studio
    case actionTypes.GET_LIST_STUDIO_LOADING: {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }
    case actionTypes.GET_LIST_STUDIO_SUCCESS: {
      return {
        ...state,
        DataListStudio: action.response.data,
        loading: false
      }
    }
    case actionTypes.GET_LIST_STUDIO_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }

    // case actionTypes.GET_BANNER:
    //   return {
    //     ...state,
    //     GetBanner: action.response.data,
    //   }
    // case actionTypes.GET_METADATA:
    //   return {
    //     ...state,
    //     GetMetadata: action.response.data,
    //   }
    // case actionTypes.POST_CONTACT:
    //   return {
    //     ...state,
    //     PostContact: action.response.data,
    //   }
    default:
      return { ...state }
  }
}
export default FicReducers
