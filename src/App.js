import React, { Component } from 'react'
import './App.css';
import CommentList from './components/CommentList';
import Compositon from './components/Compositon';
import Hoc from './components/Hoc';
import ContextSample from './components/ContextSample';
import Cart from './components/Cart';
import KFormSample from './components/KFormSample';
import MyForm from './components/MyForm';
import Form from './components/Form';
// import Form from './components/Form';

// import Button from 'antd/lib/button';
// import 'antd/dist/antd.css';

import {Button} from 'antd';
// import 'antd.css';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <CommentList></CommentList>
        <Button type="primary" >你好</Button>
        <Compositon></Compositon>
        <Hoc stage="React"></Hoc>
        <ContextSample></ContextSample>
        <Cart></Cart> */}
        <Compositon></Compositon>
        <Form></Form>
      </div>  
    )
  }
}
