import React from 'react';
import Comp1 from './component/comp1';
import { Error} from './component';
import {Button} from './utility';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      timecycle:0,
    }
  }
  componentDidMount(){
    setTimeout(() => { 
      this.setState(() => ({timecycle: this.state.timecycle+1}))
    }, 5000);
  }
  render(){
    switch(this.state.timecycle){
      case 0:
          return (
            <div className="App">
              Test will start in five seconds
            </div>
          );
      case 1:
          return (
            <div className="App">
              <Comp1 />
            </div>
          );
      default:
          return (
            <div className="App">
              <Error />
            </div>
          );
    }
    
  }
}

export default App;
