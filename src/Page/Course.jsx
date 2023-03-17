
import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCourse } from "../Components/Api";
import Lesson from "../Components/Lesson";
import VideoPlayer from '../Components/VideoPlayer';


function Course() {
    const [course, setCourse] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams()
    useEffect(() => {
        console.log(id)
        getCourse(id).then(obj => {
            console.log(obj);
            setCourse(obj); setLoading(true)
        })
    }, [])
    return (loading && (<section id={course.id} className="">
        <div className="course_video ">
            <VideoPlayer url={course.meta.courseVideoPreview.link} />
            {/* <video muted controls preload="auto" >
                <source
                    src={course.meta.courseVideoPreview.link}
                    type="application/x-mpegURL" />
            </video> */}

        </div>
        <div className="course_information ">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
        </div>
        <ul className="course_list ">
            {course.lessons.map((lesson, index) => (<Lesson {...lesson} key={lesson.id} />))}
        </ul>
    </section>)

    );
}

export default Course;