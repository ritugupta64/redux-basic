import React from 'react';
// import Cards, { Card } from 'react-swipe-card'
import { connect } from 'react-redux';

import './App.css';

class App extends React.Component{



  render(){
    return (
      <div className="App">
          {this.props.count}
      </div>
    );
  }
  
}


function mapStateToProps(state){
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch){
  return {
    Increment: () => {
      const x = {type:'increment'}
      dispatch(x);
    },
    decrement: () => {
      const x = {type:'DEcrement'}
      dispatch(x);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


