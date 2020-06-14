import React, { Component } from 'react'

function Dialog(props) {
    return (
        <div style={{border: `4px solid ${props.color || 'blue'}`}}>

            {props.children}
            <div className="footer">{props.footer}</div>
        </div>
    )
}



function WelcomeDialog() {
    const confirm = (event) => {
        console.log(event.target)
    }
    const footer = <button onClick={($event) => confirm($event)}>確定</button>
    return (
        <Dialog color="green" footer={footer}>
            <h1>Hello, React!</h1>
        </Dialog>
    )
}

const api = {
    getUser: () => ({name: 'a', age: 20})
}

function Fetcher(props) {
    let user = api[props.name]();
    return props.children(user);
}

function FilterP(props) {
    return (
        <div>{
            React.Children.map(props.children, child => {
                if (child.type !== 'p') {
                    return;
                }
                return child;
            })
        }</div>
    )
}

function RadioGroup(props) {
    return (
        <div>
            {
                /* 不能直接修改children
                React.Children.map(props.children, child => {
                    child.props.name = props.name;
                })
                */
               React.Children.map(props.children, child => {
                   return React.cloneElement(child, {
                       name: props.name
                   })
               })
            }
        </div>
    )
}

function Radio({children, ...rest}) {
    return (
        <label>
            <input type="radio" {...rest}/> {children}
        </label>
    )
}


export default class Compositon extends Component {
    render() {
        return (
            <div>
                <WelcomeDialog></WelcomeDialog>
                {/**children内容可以是任意表达式 */}
                <Fetcher name="getUser">
                    {({name, age}) => (<p>{name}-{age}</p>)}
                </Fetcher>
                <FilterP>
                    <div>a</div>
                    <p>b</p>
                    <div>c</div>
                    <p>d</p>
                </FilterP>
                <RadioGroup name="mvvm">
                    <Radio>vue</Radio>
                    <Radio>react</Radio>
                    <Radio>angular</Radio>
                </RadioGroup>
            </div>
        )
    }
}
