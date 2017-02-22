import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showModal} from '../../../actions/modalActions';

class ChatForm extends React.Component{
  constructor(props){
    super(props);
  }
  onSubmit = (e) => {
    e.preventDefault();  
    var that = this;
    var username = window.sessionStorage.getItem('username');
    if(!username){
      that.props.showModal('UsernameModal');
    } else {

      var {socket} = that.props;
      var msg = that.refs.msg.value;
      var chatLine = {
          msg: msg,
          username: window.sessionStorage.getItem('username')
      }
      socket.emit('chat message', chatLine)
      that.refs.msg.value = "";
    }
  }
  render(){
    return (
      <div className="chat-form">
        <form onSubmit={this.onSubmit} className="col-12 form-inline"> 
            <input ref="msg" className="form-control col-9 chat-input br-0" type="text" placeholder="Send a message"/>
            <button type="submit" className="btn btn-primary col-3 chat-btn br-0">Send</button>
        </form>
      </div>
    )
  }
}

// Redux config
function mapStateToProps(state){
    return {user: state.user};
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({showModal: showModal}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(ChatForm);