
import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCourse } from "../Components/Api";
import Lesson from "../Components/Lesson";
import VideoPlayer from '../Components/VideoPlayer';
import VideoPopup from '../Components/VideoPopup';
import Loading from '../Components/Loading';
import ErrorMessage from '../Components/ErrorMessage';

function Course() {
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);
    const [lessonVideoParam, setLessonVideoParam] = useState(null);
    const { id } = useParams()

    const handelOpenVideo = (lesonId) => {

        const lesson = course.lessons.find((el) => el.id === lesonId);
        if (lesson.status === "locked") { return; };
        setLessonVideoParam(lesson);
    }

    const handleCloseVideo = () => {
        setLessonVideoParam(null);
    }
    useEffect(() => {

        getCourse(id).then(obj => {

            setCourse(obj);
        }).catch((err) => {
            console.error(err);
            setErr(err.message);
        }
        ).finally(() => {
            setLoading(true);

        })
    }, [])
    return (
        <>
            {
                !loading && <Loading />
            }
            {
                err && <ErrorMessage err={err} />
            }
            {lessonVideoParam && (
                <VideoPopup lesson={lessonVideoParam} onClick={handleCloseVideo}>
                    <VideoPlayer url={lessonVideoParam.link} autoPlay={true} play={!!lessonVideoParam} />
                </VideoPopup>
            )}
            {
                loading && course && (<section id={course.id} className="course-grid">
                    <div className="course-video ">
                        <VideoPlayer url={course.meta.courseVideoPreview.link} muted={true} autoPlay={true} play={!!lessonVideoParam} />
                    </div>
                    <div className="course-information">
                        <h2 className='course-title'>{course.title}</h2>
                        <p className='course-description'>{course.description}</p>
                        <div className="course-details">
                            {course.meta.skills && <span className="course-skills"><span className="course-rating">Skills:</span> {course.meta.skills.join(', ')}.</span>}
                        </div>
                    </div>
                    <ul className="course-list ">
                        {course.lessons.map((lesson, index) => (<Lesson {...lesson} key={lesson.id} onClick={() => { handelOpenVideo(lesson.id) }} />))}
                    </ul>
                </section>)}

        </>);
}

export default Course;
