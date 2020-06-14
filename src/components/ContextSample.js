import React, { Component } from 'react'

// 1创建上下文

const Context = React.createContext();

const store = {
    name: 'React',
    sayHi() {
        console.log(this.name);
    }
}

const withProvider = Comp => props => {
    return <Context.Provider value={store}>
        <Comp {...props}></Comp>
    </Context.Provider>
}

const withConsumer = Comp => props => {
    return <Context.Consumer>
        {store => <Comp {...props} value={store}></Comp>}
    </Context.Consumer>
}
@withConsumer
class Inner  extends Component {
    render() {
        return <div onClick={() => this.props.value.sayHi()}>{this.props.value.name}</div>
    }
}
@withProvider
class ContextSample extends Component {
    // render() {
    //     return <Context.Provider value={store}>
    //         <div>
    //             <Context.Consumer>
    //                 {value => <div onClick={()=> value.sayHi()}>{value.name}</div>}
    //             </Context.Consumer>
    //         </div>
    //     </Context.Provider>
    // }
    render() {
        return <div><Inner></Inner></div>
    }
}

export default ContextSample;
