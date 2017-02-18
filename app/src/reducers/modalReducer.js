const initialState = {
  modalType: null
}
export default function modalReducer(state = initialState, action){

  switch (action.type){
    case 'SHOW_MODAL': {      
      return {...state, 
        modalType: action.payload.modalType
      }
    }
    case 'HIDE_MODAL': {
      return initialState;
    }
    default: 
      return state;
  }

}