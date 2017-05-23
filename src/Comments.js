import React, { Component } from 'react'

class Comments extends Component {
    constructor(props){
        super(props)
        this.state = {
            comment: '',
            comments: [],
        }

        this.handleChange = this.handleChange.bind(this)
        this.addComment = this.addComment.bind(this)
    }

    handleChange(ev){
        //ev.preventDefault()
        this.setState({
            comment: ev.target.value
        })
    }

    addComment(ev){
        const state = {...this.state}
        const comment = {
            text: state.comment,
            time: new Date()
        }
        state.comments.push(comment)
        state.comment = ""
        this.setState(state)
    }
    render(){
        return (
            <div>
               <textarea placeholder="Enter a comment" value={this.state.comment} onChange={this.handleChange}></textarea>
                <button className="button" onClick={this.addComment}>Submit Comment</button>
                {this.state.comments.map((comment, i) => <Comment key={i} comment={comment} />)}
            </div>
        )
    }
}
function Comment(props){
    return (
        <div className="comment">
             <div>{props.comment.text}</div>
         </div>
    )
}
export default Comments