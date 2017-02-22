export function showModal(modalType){
  return {
    type: 'SHOW_MODAL',
    payload: {
      modalType: modalType
    }
  }
}

export function hideModal(){
  return {
    type: 'HIDE_MODAL'
  }
}