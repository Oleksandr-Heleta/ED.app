
import React from 'react';

function Lesson({
    id,
    title,
    duration,
    order,
    type,
    status,
    previewImageLink,
    onClick
}) {

    return (
        <li id={id} className="course" onClick={onClick}>

            <div className="course-image">
                <img src={previewImageLink + '/lesson-' + order + '.webp'} className="course-image" alt={title} />
            </div>
            <div className="course-info">
                <div className="card-body">
                    <h5 className="course-title">{title}</h5>
                    <p className="course-details">
                        <span className="course-rating">status {status}</span>
                        <span className="course-skills">durationus {duration}</span>
                        <span className="course-skills">type {type}</span>
                    </p>
                </div>
            </div>

        </li >
    );
}

export default Lesson;