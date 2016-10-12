import * as React from 'react';
import * as throttle from 'lodash/throttle';

interface IThrottled {
  (value: string): void;
  cancel?: () => {};
}

interface ITargetValue {
  value: string;
}

interface InputEventTarget extends EventTarget {
  target: ITargetValue;
}

interface Props {
  name: string;
  onChange(value: string): Function;
}

const THROTTLE_TIME: number = 300; // ms

export default class Input extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onChangeThrottle = throttle(this.onChangeThrottle, THROTTLE_TIME);
  }

  componentWillUnmount() {
    this.onChangeThrottle.cancel();
  }

  private onChange: any = (event: InputEventTarget) => {
    const value: string = (event.target as ITargetValue).value;
    this.onChangeThrottle(value);
  }

  private onChangeThrottle: IThrottled = (value: string) => {
    this.props.onChange(value);
  }

  render() {
    return <input
      type="text"
      onChange={this.onChange}
      defaultValue={this.props.name}
    />;
  }
}
