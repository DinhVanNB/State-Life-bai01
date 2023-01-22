import './App.css';
import React, {Component} from 'react';
import Infomation  from './components/Infomation';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isExpand:false
    }
  }
  onClick=()=>{
    this.setState({
      isExpand: !this.state.isExpand
    })
  }
  render(){
    let elementInfo = this.state.isExpand? <Infomation/> :null;
    return (

      <div>
        <div className="divHeader">
          <h1>Conditional Rendering</h1>
        </div>
        <div>
          <button onClick={this.onClick}>
            {this.state.isExpand?'Đóng giới thiệu':'Xem giới thiệu'}
          </button>
        </div>
        {elementInfo}
      </div>
    );
  }

}

export default App;
