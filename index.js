import { VisibilityFilters, ADD_TODO, TOGGLE_TODO } from './actions';

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

    	 case ADD_TODO :
    	    return Object.assign(
    	    	{}, state, {
    	    		todos: [
    	    			...state.todos,
    	    			{
    	    				text: action.text,
    	    				completed: false
    	    			}
    	    		]
    	    	})
    	    
    	 default:
    	 	return state
    }
}