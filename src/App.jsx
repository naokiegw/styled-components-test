import React, { Component } from 'react';
import styled from 'styled-components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
    this.updateWindowWidth = this.updateWindowWidth.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.updateWindowWidth);
  }

  updateWindowWidth() {
    const windowWidth = window.innerWidth;
    this.setState({ windowWidth });
  }

  render() {
    const { windowWidth } = this.state;
    return (
      <HelloWorld width={windowWidth}>
        hello world!
      </HelloWorld>
    );
  }
}

const getColor = width => (width >= 500 ? 'red' : 'blue');

const HelloWorld = styled.div`
  color: ${({ width }) => getColor(width)};
`;

export default App;
