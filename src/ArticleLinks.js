import React, { Component } from 'react'
import './App.css'

class ArticleLinks extends Component {
    constructor(props){
      super(props)

      this.state = {
        showComments: false,
      }

      this.toggleComments = this.toggleComments.bind(this)
    }

    toggleComments(ev){
      ev.preventDefault()
      this.setState({
        showComments: !this.state.showComments
      }, () => console.log(this.state))
    }
    
    render() {
        return (
            
            <div className="article-links">
              <a className="article-link" href="#" onClick={this.toggleComments}>
                <i className="fa fa-comments-o"></i>
                <span className="article-link-text">Comments</span>
              </a>
              <a className="article-link" href="#">
                <i className="fa fa-share"></i>
                <span className="article-link-text">Share Post</span>
              </a>
              {this.state.showComments ? <div>Comments enabled</div> : null}
            </div>
        )
    }
}
export default ArticleLinks