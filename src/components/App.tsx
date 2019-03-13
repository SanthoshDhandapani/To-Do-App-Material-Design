import * as React from 'react';

export interface IAppProps {}

export default class App extends React.Component<IAppProps, undefined> {
  public render() {
    return (
      <div className='app'>
        <h1>Hello World!</h1>
        <p>This is santhosh</p>
      </div>
    );
  }
}
