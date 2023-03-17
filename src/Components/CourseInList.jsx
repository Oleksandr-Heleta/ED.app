
import React from 'react';
import { Link } from "react-router-dom";

function CourseInList({ id, title, description, previewImageLink, rating, lessonsCount, meta }) {

    // console.log(meta.skills);
    return (

        <Link to={'/courses/' + id}>

            <li id={id} className="course">
                <div className="course-image">
                    <img src={previewImageLink + '/cover.webp'} alt={title} />
                </div>
                <div className="course-info">
                    <h2 className="course-title">{title}</h2>
                    <p className="course-description">{description}</p>
                    <div className="course-details">
                        <span className="course-lessons">Lessons: {lessonsCount}</span>
                        {meta.skills && <span className="course-skills">Skills: {meta.skills.join(', ')}</span>}
                        <span className="course-rating">Rate: {rating}</span>
                    </div>
                </div>
            </li>
        </Link>
    );
}
export default CourseInList;