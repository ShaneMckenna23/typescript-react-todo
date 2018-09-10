import * as React from 'react';
import styled from 'react-emotion';

const Test = styled.div`
  background-color: red;
`

class App extends React.Component {
  public render() {
    return (
      <Test>
        123123123123
      </Test>
    );
  }
}

export default App;
