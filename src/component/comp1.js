import React from 'react';
import Comp2 from '../component/comp2';
import { Error} from '../component';
import '../App.css';

class Comp1 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      timecycle:0,
    }
  }
  componentDidMount(){
    setTimeout(() => { 
      this.setState(() => ({timecycle: this.state.timecycle+1}))
    }, 3000);
  }
  render(){
    switch(this.state.timecycle){
      case 0:
          return (
            <div className="App">
              COMPONENT 1 - component 2 in 3 seconds
            </div>
          );
      case 1:
          return (
            <div className="App">
              <Comp2 />
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

export default Comp1;
