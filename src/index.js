import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app/';
import reportWebVitals from './reportWebVitals';

class WhoAmI extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     years: 26
  //   }
    
  //   // 3 ways of binding this context to the React component instance

  //   // // 1 way: use bind(this) on change state function
  //   // this.nextYear = this.nextYear.bind(this);

  //   // // 2 way: use event handler in constructor to modify state for component instance
  //   // this.nextYear = () => {
  //   //   this.setState(state => ({
  //   //     years: ++state.years
  //   //   }))
  //   // }

  //   // 3 way: 
    
  // }


  // 3 way: use function as event handler -> class fields 
  // class fields allow to write properties and methods outside constructor
  nextYear = () => {
      this.setState(state => ({
        years: ++state.years
      }))
    }

    state = {
      years: 26
    }

  // for 1 way of binding this context
  // nextYear() {
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  // }

  render() {
    const {name, surname, link} = this.props;
    const {years} = this.state;
    return (
      <>
        <button onClick={this.nextYear}>++</button>
        <h1>My name is {name}, surname - {surname}, years - {years}</h1>
        <a href={link}>My profile</a>
      </>
    )
  }
}

const All = () => {
  return (
    <>
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="Tim" surname="Smith" link="vk.com" />
      <WhoAmI name="Alan" surname="Shile" link="facebook.com" />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <All/>
  </React.StrictMode>,
  document.getElementById('root')
  );
  
reportWebVitals();
