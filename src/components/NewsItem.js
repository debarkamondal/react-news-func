import React from 'react'

const NewsItem = (props) => {

    let { title, description, imgUrl, newsUrl, source } = props;
    return (
        <div className="card my-2">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: 1 }}>
                {source}
                <span className="visually-hidden">unread messages</span>
            </span>
            <img src={imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
            </div>
        </div >
    )
}

export default NewsItem