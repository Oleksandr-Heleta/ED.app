
import React from 'react';

function Lesson({
    id,
    title,
    duration,
    order,
    type,
    status,
    link,
    previewImageLink,
    meta }) {

    return (
        <section id={id} className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={previewImageLink + '/' + order + '.webp'} class="img-fluid rounded-start" alt={title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text"><small className="text-muted">status {status} | durationus {duration} | type {type}</small></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Lesson;