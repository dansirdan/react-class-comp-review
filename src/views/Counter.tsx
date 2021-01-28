import * as React from "react";

type State = {
  count: number;
};

class Counter extends React.Component<State> {
  readonly state: State = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const { handleIncrement } = this;
    const { handleDecrement } = this;
    const { count } = this.state;

    return (
      <div className='App'>
        <span>Count: {count}</span>
        <button type='button' onClick={handleIncrement}>
          Increment
        </button>
        <button type='button' onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
