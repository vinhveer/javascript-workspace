import React from "react"

const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card w-25">
            <img src={src} className="card-img-top"></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default NewsItem
