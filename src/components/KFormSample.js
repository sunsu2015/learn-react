import React, { Component } from 'react'

function kFormCreate(Comp) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.options = {};
            this.state = {};
        }
    
        handleChange = e => {
            const {name, value} = e.target;
            this.setState({
                [name]: value
            }, () => {
                this.validateField(name)
            });
        }
    
        validateField = field => {
            const rules = this.options[field].rules;
            const ret = rules.some(rule => {
                if (rule.required) {
                    if (!this.state[field]) {
                        this.setState({
                            [field + 'Message']: rule.message
                        })
                        return true;
                    }
                    return false;
                }
            });
            if (!ret) {
                this.setState({
                    [field + 'Message']: ''
                })
            }
            return ret;
        }

        getFieldDec = (field, option, InuptComp) => {
            this.options[field] = option;
            return (<div>
                {React.cloneElement(InuptComp, {
                    name: field,
                    value: this.state[field] || '',
                    onChange: this.handleChange
                })}
                {
                    this.state[field + 'Message'] && (
                        <p style={{color: 'red'}}>{this.state[field+'Message']}</p>
                    )
                }
            </div>)
        }
    
        render() {
            return <Comp {...this.props} getFieldDec={this.getFieldDec} value={this.state}></Comp>
        }
    }
}

@kFormCreate
class KFormSample extends Component {
    onSubmit = () => {
        console.log(this.props.value);
    }
    render() {
        const {getFieldDec} = this.props;
        return (
            <div>
                {
                    getFieldDec('uname', {
                        rules: [{required: true, message: '请填写用户名'}]
                    }, <input type="text"/>)
                }
                {
                    getFieldDec('password', {
                        rules: [{required: true, message: '请填写密码'}]
                    }, <input type="password"/>)   
                }
                <button onClick={this.onSubmit}>登录</button>
            </div>
        )
    }
}

export default KFormSample;