import { VisibilityFilters} from './actions';

const initialState = {
	VisibilityFilter: VisibilityFilters.SHOW_ALL,
	todos: []
}

function todoApp(state = initialState, action){
    switch(action){
    	case SET_VISIBILITY_FILTER:
    	   return Object.assign({}, state, {
    	   	visibilityFilter: action.filter
    	   })
    	 default:
    	 	return state
    }
}