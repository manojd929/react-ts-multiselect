import React, { Component } from 'react';
import { render } from 'react-dom';
import Multiselect from './Multiselect';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

const options = [
  {
    label: 'Royal Challengers Bangalore',
    value: 'rcb',
    selected: false
  },
  {
    label: 'Kings XI Punjab',
    value: 'kxip',
    selected: false
  },
  {
    label: 'Rajasthan Royals',
    value: 'rr',
    selected: false
  },
  {
    label: 'Delhi Capitals',
    value: 'dc',
    selected: false
  },
  {
    label: 'Kolkata Knight Riders',
    value: 'kkr',
    selected: false
  },
  {
    label: 'Sunrisers Hyderabad',
    value: 'srh',
    selected: false
  },
  {
    label: 'Mumbai Indians',
    value: 'mi',
    selected: false
  },
  {
    label: 'Chennai Super Kings',
    value: 'csk',
    selected: false
  }
];

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  onChangeHandler = (selectedValues, unselectedValues) => {
    console.log(selectedValues, unselectedValues);
  };

  render() {
    return (
      <div>
        <h2>Multiselect Component</h2>
        <Multiselect
          label="Transaction Type"
          options={options}
          handleOnchange={this.onChangeHandler}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
