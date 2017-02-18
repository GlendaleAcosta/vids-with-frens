import React from 'react';
import CreateRoomModal from 'CreateRoomModal';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUser} from '../../../actions/userActions';
import {showModal} from '../../../actions/modalActions';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  createRoom = (e) => {
    e.preventDefault();  
    this.props.showModal()
  }
  
  render(){
    console.log('RENDER: HOME');

    return (   
      <div className="jumbotron jumbotron-fluid">
        <div className="pt-5 container text-center">
          <h1 className="display-3">Watch Videos with Friends!</h1>
          <p className="lead">All you do is create a room and send the link to your friends!</p>
          <button 
            onClick={this.createRoom} 
            className="btn btn-primary">
            Create a Room
          </button>
        </div>
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
export default connect(mapStateToProps, matchDispatchToProps)(Home);