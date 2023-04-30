import React from 'react';

function Project(props) {
    return(
        <div className="col-lg-4 my-lg-4 image-container">
        <a href={props.deployed} target="_blank"><img
                src={props.image} className="img-fluid img-thumbnail"
                alt="Shared Lunch Preview"/></a>
        <a href={props.deployed} target="_blank" className="d-grid gap-2 text-decoration-none">
            <div className="btn bg-secondary-subtle view-overlay">
                View
                <i className="bi bi-box-arrow-up-right"></i>
            </div>
        </a>
        <a href={props.github} target="_blank" className="d-grid gap-2 text-decoration-none">
            <div className="btn bg-secondary-subtle view-overlay">
                Github
                <i className="bi bi-box-arrow-up-right"></i>
            </div>
        </a>
        <div className="text-overlay">
            <p>{props.description}</p>
        </div>
    </div>
    )
}

export default Project;