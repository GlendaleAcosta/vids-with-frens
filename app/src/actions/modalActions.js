export function showModal(){
  return {
    type: 'SHOW_MODAL',
    payload: {
      modalType: 'CreateRoomModal'
    }
  }
}

export function hideModal(){
  return {
    type: 'HIDE_MODAL'
  }
}