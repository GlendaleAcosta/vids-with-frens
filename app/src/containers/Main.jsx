import React from 'react';
import Navbar from 'Navbar';
import Footer from 'Footer';
import Modal from 'Modal';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUser} from '../actions/userActions';
class Main extends React.Component{
  constructor(props){
    super(props);
  }

  renderModal(){
    if(this.props.modal.modalType){
      return <Modal />
    }
  } 

  render(){    
    console.log("RENDER: MAIN");
    return (
      <div>
        <Navbar/>
        {this.props.children}  
        {this.renderModal()}   
      </div>
    )
  }
}

// Redux config
function mapStateToProps(state){
    return {
      user: state.user,
      modal: state.modal
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchUser: fetchUser}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Main);