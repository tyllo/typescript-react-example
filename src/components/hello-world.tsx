import * as React from 'react';

interface Props {
  name: string;
}

export default class HelloWorld extends React.Component<Props, {}> {
  render() {
    return (<div>Hello {this.props.name}!</div>);
  }
}
