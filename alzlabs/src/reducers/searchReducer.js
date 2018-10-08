import { SET_SEARCH_LOADING, SET_SEARCH_SUCCESS, SET_SEARCH_FAIL} from '../actions/types'

const DEFAULT_STATE = {
    results:false
  };

export default (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case SET_SEARCH_LOADING:
    return {
        results:action.information
      };
      case SET_SEARCH_SUCCESS:
      return{
          results:action.information
      }
      case SET_SEARCH_FAIL:
      return{
          results:action.information
      }
		default:
		return state;
	}
}