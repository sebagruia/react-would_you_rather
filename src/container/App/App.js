import React, { Component } from "react";
import "./App.css";
import Navigation from '../../component/Navigation';
import LogIn from '../../component/LogIn';
import { connect } from "react-redux";
import {setLoginUserAction} from '../../actions/setLoginUserAction';

const mapStateToProps = (state)=>{
  return {
    users:state.usersReducer.users,
    loginField:state.chooseLoginReducer.loginField
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    onLoginChange: (event)=>{
    event.preventDefault();
    dispatch(setLoginUserAction(event.target.value))

  }
}

}
class App extends Component{
  render(){
    const {users,loginField,onLoginChange} = this.props
    return(
      <div>
        <Navigation />
        <LogIn users={users} onLoginChange={onLoginChange} loginField={loginField}/>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
