import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hideModal} from '../../actions/modalActions';

class UsernameModal extends React.Component{
  constructor(props){
    super(props);
  }

  onSubmit = (e) => {
    e.preventDefault();
    var username = this.refs.username.value;
    window.sessionStorage.setItem('username', username);
    this.props.hideModal();
  }

  render(){
    return(
      <div className="card-block">
        <h4 className="card-title">Pick a username first!</h4>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Enter a username:</label>
            <input ref="username" className="mb-2 form-control" type="text" placeholder="John Snow"/>
            <button className="btn btn-primary form-control" type="submit">Set Username</button>
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
export default connect(mapStateToProps, matchDispatchToProps)(UsernameModal);