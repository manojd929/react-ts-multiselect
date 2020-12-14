import React, { Component } from "react";
import { render } from "react-dom";
import Multiselect from "./Multiselect";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
}

const options = [
  {
    label: "Sale",
    value: "sale",
    selected: false
  },
  {
    label: "Refund",
    value: "refund",
    selected: false
  },
  {
    label: "Chargeback",
    value: "chargeback",
    selected: false
  },
  {
    label: "Chargeback Reversal",
    value: "chargebackreversal",
    selected: false
  },
  {
    label: "Add funds",
    value: "addfunds",
    selected: false
  },
  {
    label: "Adjustments",
    value: "adjustments",
    selected: false
  },
  {
    label: "Bonus",
    value: "bonus",
    selected: false
  },
  {
    label: "Payouts",
    value: "payouts",
    selected: false
  }
];

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
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

render(<App />, document.getElementById("root"));
