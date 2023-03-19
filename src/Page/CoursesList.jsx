
import React from 'react';
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { getCourses } from "../Components/Api";
import CourseInList from "../Components/CourseInList";
import Loading from '../Components/Loading';
import Pagination from '../Components/Pagination';
import ErrorMessage from '../Components/ErrorMessage';


function CoursesList() {
    const courseCount = 10;
    const [courses, setCourses] = useState([]);
    const [load, setLoad] = useState(false);
    const [err, setErr] = useState(null);
    let { page } = useParams();

    page = page ? parseInt(page.replace(/[^\d]+/g, '')) : 1;
    useEffect(() => {
        getCourses().then(obj => {
            setCourses(obj.courses);

        }).catch(err => {
            console.erroe(err);
            setErr(err);


        }).finally(() => setLoad(true))
    }, [])
    return (<>
        {
            !load && <Loading />
        }
        {
            err && <ErrorMessage err={err} />
        }
        {
            courses.length &&

            <>
                <ul>
                    {courses.filter((el, index) => (index >= (page * courseCount - courseCount) && index < (page * courseCount))).map((course, index) => <CourseInList {...course} key={course.id} />)}
                </ul>
                <Pagination count={Math.ceil(courses.length / courseCount)} page={page} />
            </>
        }
    </>
    );
}

export default CoursesList;