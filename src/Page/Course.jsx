
import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCourse } from "../Components/Api";
import Lesson from "../Components/Lesson";
import VideoPlayer from '../Components/VideoPlayer';
import VideoPopup from '../Components/VideoPopup';
import Loading from '../Components/Loading';

function Course() {
    const [course, setCourse] = useState({});
    const [loading, setLoading] = useState(false);
    const [lessonVideoParam, setLessonVideoParam] = useState(null);
    const { id } = useParams()

    const handelOpenVideo = (lesonId) => {

        const lesson = course.lessons.find((el) => el.id === lesonId);
        if (lesson.status === "locked") { return; };
        console.log(lesson)
        setLessonVideoParam(lesson);
    }

    const handleCloseVideo = () => {
        setLessonVideoParam(null);
    }
    useEffect(() => {
        console.log(id)
        getCourse(id).then(obj => {
            console.log(obj);
            setCourse(obj);
        }).finally(() => setLoading(true))
    }, [id])
    return (<>{

        !loading && <Loading />

    }
        {lessonVideoParam && (<VideoPopup lesson={lessonVideoParam} onClick={handleCloseVideo}>
            <VideoPlayer url={lessonVideoParam.link} play={!!lessonVideoParam} />
        </VideoPopup>)}
        {loading && (<section id={course.id} className="">
            <div className="course_video ">
                <VideoPlayer url={course.meta.courseVideoPreview.link} muted={true} autoPlay={true} play={!!lessonVideoParam} />
            </div>
            <div className="course_information ">
                <h2 className='course-title'>{course.title}</h2>
                <p className='.course-description'>{course.description}</p>
            </div>
            <ul className="course_list ">
                {course.lessons.map((lesson, index) => (<Lesson {...lesson} key={lesson.id} onClick={() => { handelOpenVideo(lesson.id) }} />))}
            </ul>
        </section>)}

    </>);
}

export default Course;