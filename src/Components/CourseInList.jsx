
import React from 'react';
import { Link } from "react-router-dom";

function CourseInList({ id, title, description, previewImageLink, rating }) {

    // console.log(courseData.courseData);
    return (

        <Link to={'/' + id}>
            <section id={id} className="card mb-3 courses_item" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={previewImageLink + '/cover.webp'} className="img-fluid rounded-start" alt={title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">{rating}</small></p>
                        </div>
                    </div>
                </div>
            </section>
        </Link>
    );
}

export default CourseInList;