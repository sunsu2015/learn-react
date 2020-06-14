import React, { Component } from 'react'
import Validate from 'async-validator'

const options = [
    {
        field: 'username',
        value: '',
        type: 'text',
        rules: [{
            type: 'string',
            required: true
        }]
    },
    {
        field: 'password',
        value: '',
        type: 'password',
        rules: [{
            type: 'string',
            required: true
        }]
    }
]

function CreateForm(Comp) {
    const params = {};
    options.forEach(item => params[item.field])
    const validator = new Validate(params);
    return class extends Component {
        constructor(props) {
            super(props);
            this.validator = null;
            this.options = {};
            this.state = {};
        }

        changeHandler = (e) => {
            const {name, value} = e.target;
            this.setState({
                [name]: value
            }, () => this.validate(name));
        }

        createFormItem = (field, rules, jsx) => {
            this.options[field] = rules;
            return (
                <div>
                    {
                        React.cloneElement(jsx, {
                            name: field,
                            value: this.state[field] || '',
                            onChange: this.changeHandler
                        })
                    }
                    {
                        <em style={{color: 'red'}}>{this.state[`${field}Error`]}</em>
                    }
                </div>
            )
        }

        validate = (field) => {
            if (!this.validator) {
                this.validator = new Validate(this.options);
            }
            return new Promise((resolve, reject) => {
                this.validator.validate(this.state, err => {
                    if (err) {
                        if (field) {
                            const error = err.find(item => item.field === field) || {}
                            this.setState({
                                [`${field}Error`]: error.message
                            });
                        } else {
                            const errMsg = JSON.parse(JSON.stringify(this.state));
                            err.forEach(item => errMsg[`${item.field}Error`] = item.message);
                            this.setState(errMsg);
                        }
                        resolve(false);
                    } else {
                        if (field) {
                            this.setState({
                                [`${field}Error`]: ''
                            });
                        } else {
                            const errMsg = JSON.parse(JSON.stringify(this.state));
                            options.forEach(item => errMsg[`${item.field}Error`] = '');
                            this.setState(errMsg);
                        }
                        resolve(true);
                    }
                })
            });
        }

        render() {
            return <Comp {...this.props} createFormItem={this.createFormItem} fields={this.state} validate={this.validate}></Comp>
        }

    }
}

@CreateForm
class Form extends Component {
    submit = async () => {
        const ret = await this.props.validate();
        if (ret) {
            alert('校验成功');
        } else {
            alert('校验失败');
        }
    }
    render() {
        return (
            <div>
                {
                    options.map(item => {
                        return (<div key={item.field}>
                            {this.props.createFormItem(item.field, item.rules, <input type={item.type}></input>)}
                        </div>)
                    })
                }
                <button onClick={this.submit}>提交</button>
            </div>
        )
    }
}


export default Form