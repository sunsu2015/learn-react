import React, { Component, PureComponent } from 'react'

// class Comment extends PureComponent {

//     // shouldComponentUpdate(nextProps, nextState) {
//     //     if (nextProps.data.author === this.props.data.author &&
//     //         nextProps.data.body === this.props.data.body) {
//     //             return false;
//     //         }
//     //         return true;
//     // }

//     render() {
//         console.log('渲染');
//         const data = this.props;
//         return (
//             <div>
//                 <p>{data.author}</p>
//                 <p>{data.body}</p>
//             </div>
//         )
//     }
    
// }

const Comment = React.memo(props => {
    console.log('渲染');
    const data = props;
    return (
        <div>
            <p>{data.author}</p>
            <p>{data.body}</p>
        </div>
    )
})

export default class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                comments: [
                    {
                        body: 'react is very good', 
                        author: 'facebook'
                    }, {
                        body: 'vue is very good', 
                        author: 'you'
                    }
                ]
            })
        }, 1000);
    }

    render() {
        return (
            <div>
                {
                    this.state.comments.map((item, i) => <Comment key={i} {...item}></Comment>)
                }
            </div>
        )
    }
}
