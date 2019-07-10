import * as React from 'react';
import './style.scss';

interface IState {
  active: number
}

class App extends React.Component<{}, IState> {
  constructor(props: IState) {
    super(props)
    this.state = {
      active: 1
    }
    // 改变方法内的this指向
  }


  public render() {
    return (
      <div className="App">
        <h1>please go on ...</h1>
      </div>
    );
  }
}

export default App
