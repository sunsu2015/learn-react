import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Lifecycle from './Lifecycle';
import * as serviceWorker from './serviceWorker';
// let a = 2;
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
// let timer = setInterval(() => {
//   a--;
//   const component = a ? <Lifecycle prop={a}></Lifecycle> : null;
//   if (!a) {
//     clearInterval(timer);
//   }
//   ReactDOM.render(component, document.getElementById('root'))
// }, 2000);
// ReactDOM.render(<Lifecycle prop={a}></Lifecycle>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
