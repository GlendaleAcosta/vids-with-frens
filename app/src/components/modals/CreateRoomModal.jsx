import React from 'react';
import request from 'superagent';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hideModal} from '../../actions/modalActions';

class CreateRoomModal extends React.Component {
  constructor(props){
    super(props);
  }

  onSubmit = (e) => {
    e.preventDefault();
    var that = this;
    var username = this.refs.username.value;
    window.sessionStorage.setItem('username', username);

    request
      .post('/api/room')
      .send({ username: username })
      .set('Accept', 'application/json')
      .end(function(err, res){
        if(err){console.log(res)};
        if(res){
          if(res.body.success){
            that.refs.username.value = "";
            that.refs.username.placeholder = "";
            that.props.hideModal();
            browserHistory.push('/room/' + res.body.roomId);
          }
        }
      })
  }

  render(){
    return (
      <div className="card-block">
        <h4 className="card-title">Your name please.</h4>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Enter a username:</label>
            <input ref="username" className="mb-2 form-control" type="text" placeholder="John Snow"/>
            <button className="btn btn-primary form-control" type="submit">Create Room</button>
          </div>
        </form>
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
export default connect(mapStateToProps, matchDispatchToProps)(CreateRoomModal);