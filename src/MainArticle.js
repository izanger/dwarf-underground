import React, { Component } from 'react'
import Author from './Author'
import ArticleLinks from './ArticleLinks'
import ArticleBody from './ArticleBody'
import './MainArticle.css'


class MainArticle extends Component{
    render() {
        return(
            <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
           
            <Author />

            <ArticleBody />

            <ArticleLinks />

          </div>

        )
    }
}
export default MainArticle