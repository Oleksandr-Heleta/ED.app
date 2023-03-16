
import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCourse } from "../Components/Api";
import Lesson from "../Components/Lesson";


function Course() {
    const [course, setCourse] = useState({});
    const [loading, setLoading] = useState(false);
    const { courseId } = useParams()
    useEffect(() => {
        console.log(courseId)
        getCourse(courseId).then(obj => {
            console.log(obj);
            setCourse(obj); setLoading(true)
        })
    }, [])
    return (loading && (<section id={course.id} className="course container mb-3">
        <div className="course_video col-md-4">
            <video muted controls preload="auto" >
                <source
                    src={course.meta.courseVideoPreview.link}
                    type="application/x-mpegURL" />
            </video>

        </div>
        <div className="course_information col-md-8">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
        </div>
        <div className="course_list col-md-12">
            {course.lessons.map((lesson, index) => (<Lesson {...lesson} key={lesson.id} />))}
        </div>
    </section>)

    );
}

export default Course;