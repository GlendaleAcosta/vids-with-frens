import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hideModal} from '../../actions/modalActions';
import CreateRoomModal from 'CreateRoomModal';
import UsernameModal from 'UsernameModal';

class Modal extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  
  exitModal = (e) => {
    this.props.hideModal();
  }

  render(){
    var that = this;
    function renderModal(){
      if(that.props.modal.modalType === 'CreateRoomModal'){
        return <CreateRoomModal />
      } else if (that.props.modal.modalType === 'UsernameModal'){
        return <UsernameModal />
      }
    }
    return (
      <div className="modal-container">
        <div className="card col-4 modal-block">
            {/*<CreateRoomModal/>*/}
            {renderModal()}
            <div onClick={this.exitModal} className="modal-x"></div>
        </div>        
        <div onClick={this.exitModal} className="modal-darkness"></div>
      </div>
    )
  }
}


// Redux config
function mapStateToProps(state){
    return {
      modal: state.modal
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({hideModal: hideModal}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Modal);