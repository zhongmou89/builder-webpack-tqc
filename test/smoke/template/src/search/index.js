

import React from 'react';
import ReactDOM from 'react-dom';
// import largeNumber from 'large-number-test-tqc';
import './index.less';
import logo from './images/1.png';
// import '../../common';
// import { a } from './tree-shaking';

// if (false) {
//   a();
// }

class Search extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      Text: null,
    };
  }

  loadComponent() {
    import('./text.js').then((Text) => {
      this.setState({
        Text: Text.default,
      });
    });
  }

  render() {
    // const funcA = a();
    const { Text } = this.state;
    // const addResult = largeNumber('999', '1');
    return (
      <div className="search-text">
        {/* { addResult } */}
        {
          Text ? <Text /> : null
        }
        Search Tex 极客时间33388888833
        {' '}
        <img src={logo} onClick={this.loadComponent.bind(this)} />

      </div>
    );
  }
}
ReactDOM.render(
  <Search />,
  document.getElementById('root'),
);
