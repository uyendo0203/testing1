
import api from 'src/api/axiosServices';
import * as actionTypes from '../types'

export const ScrollToSec2 = params => async dispatch => {
  dispatch({ type: actionTypes.SCROLL_TO_SEC_2, response: params });
}
export const ScrollToIDHome = params => async dispatch => {
  dispatch({ type: actionTypes.SCROLL_TO_ID, response: params });
}

export const GetListStudio = params => async dispatch => {
  // console.log(1,process.env.NODE_ENV,process.env.DOMAIN_API);
  try {
    dispatch({ type: actionTypes.GET_LIST_STUDIO_LOADING });
    // setTimeout(() => {
    api.get('/rooms', params)
      .then(
        data => dispatch({ type: actionTypes.GET_LIST_STUDIO_SUCCESS, response: data }),
        error => dispatch({ type: actionTypes.GET_LIST_STUDIO_ERROR, error: error })
      )
    // }, 5000);

  } catch (error) {
    dispatch({ type: actionTypes.GET_LIST_STUDIO_ERROR, error: error })
  }
}