import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hideModal} from '../../actions/modalActions';
import CreateRoomModal from 'CreateRoomModal';

class Modal extends React.Component {
  constructor(props){
    super(props);
  }
  
  exitModal = (e) => {
    this.props.hideModal();
  }

  render(){
    return (
      <div className="modal-container">
        <div className="card col-4 modal-block">
            <CreateRoomModal/>
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