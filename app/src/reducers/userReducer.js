const initialState = {
  id: null,
  name: null,
  fetching: false,
  fetched: false,
  error: null
}
export default function userReducer(state = initialState, action){

  switch (action.type){
    case 'FETCH_USER': {
      return {...state, 
        fetching: true,
        fetched: false
      }
    }
    case 'FETCHED_USER': {
      return {...state,
        fetched: true,
        fetching: false
      }
    }
    case 'FETCH_USER_REJECTED': {
      return {...state,
        fetching: false
      }
    }
    default: 
      return state;
  }

}
  