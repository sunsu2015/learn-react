import React, { Component } from 'react'

/**
 * constructor
 * componentWillMount
 * render
 * componentDidMount
 * componentWillReceiveProps
 * shouldComponentUpdate
 * componentWillUpdate
 * render
 * componentDidUpdate
 * componentWillUnmount
 * */ 


export default class Lifecycle extends Component {
    constructor(props) {
        super(props);
        console.log('1.构造函数');
        console.log(props);
        this.state = {
            msg: `来自属性传递:${props.prop}`
        }
    }

    componentWillMount() {
        // 可以访问属性状态，可以调用api，无法做dom操作
        console.log('2.组件将要挂载');
    }

    componentDidMount() {
        // 组件已挂载
        console.log('4.组件已经挂载');
    }
    componentWillReceiveProps() {
        // 父组件传递的属性发生变化
        console.log('5.组件属性更新');
    }
    shouldComponentUpdate(props, state) {
        // 组件是否需要更新，返回boolean
        console.log('6.组件是否需要更新');
        return true;
    }
    componentWillUpdate() {
        // 组件将要更新
        console.log('7.组件将要更新');
    }
    componentDidUpdate() {
       // 组件更新了
       console.log('8.组件更新了'); 
    }
    render() {
        console.log('3.组件渲染, 7之后应该再次执行');
        return (
            <div>
                组件生命周期演示{this.props.prop}
            </div>
        )
    }
    componentWillUnmount() {
        // 组件卸载
       console.log('9.组件卸载'); 
    } 
}
