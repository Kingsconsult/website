import React from 'react'
import './style.css'
const Article = (props) =>{

    const {articles} = props;
    if (!articles || articles.length ===0) return <p className="repo-header">No Article Available</p>
    return(
        <>
            <h2 className="repo-header">Published Articles</h2>
            <div className = "article-profile">
            {articles.map((article)=>{
                return(
                <>
                <div className = "card">
                <div class="container">
                <a href={article.url}><h4 key = {article.id} className="list">{article.title}</h4></a>
                <small><p key = {article.id} className="list">{article.description}</p></small>
                </div>
                </div>
                </>
                )
            })}
            </div>
        </>
    );
}

export default Article