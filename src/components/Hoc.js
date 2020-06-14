import React, { Component } from 'react'

@KKBWithName('高階函數介紹')
@WithLog
class KKB extends Component{
    render() {
        return (
            <div>
                {this.props.stage} - {this.props.name}
            </div>
        )
    }
}



function KKBWithName (name) {
    return Comp => {
        class NewComponent extends Component {
            componentDidMount() {
                console.log('do something');
            }
            render() {
                return <Comp {...this.props} name={name}></Comp>
            }
        }

        return NewComponent;
    }
}

function WithLog(Comp) {
    console.log('Comp 渲染');
    return (props) => <Comp {...props}></Comp>
}

export default KKB;
