import * as React from 'react';

import Input from 'components/input';
import HelloWorld from 'components/hello-world';

interface IState {
  name: string;
}

export default class App extends React.Component<{}, IState> {
  state = {
    name: 'World',
  };

  onChange: any = (name: string) => {
    this.setState({ name });
  };

  render() {
    return <main>
      <Input onChange={this.onChange} name={this.state.name}/>
      <HelloWorld name={this.state.name} />
    </main>;
  }
}
