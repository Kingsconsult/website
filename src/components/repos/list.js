import React from 'react'
import './style.css'
const List = (props) =>{

    const {repos} = props;
    if (!repos || repos.length ===0) return <p>No Repo Available</p>
    return(
        <>
            <h2 className="repo-header">Available Public Repositories</h2>
            <div className = "git-profile">
            {repos.map((repo)=>{
                return(
                <>
                <div className = "card">
                <div class="container">
                <a href={repo.html_url}><h4 key = {repo.id} className="list">{repo.name}</h4></a>
                <small><p key = {repo.id} className="list">{repo.description}</p></small>
                </div>
                </div>
                </>
                )
            })}
            </div>
        </>
    );
}

export default List