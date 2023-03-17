
import React from 'react';
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { getCourses } from "../Components/Api";
import CourseInList from "../Components/CourseInList";
import Pagination from '../Components/Pagination';


function CoursesList() {
    const courseCount = 10;
    const [courses, setCourses] = useState([]);
    let { page } = useParams();

    page = page ? parseInt(page.replace(/[^\d]+/g, '')) : 1;
    useEffect(() => {
        getCourses().then(obj => { console.log(obj); setCourses(obj.courses) }).catch(err => console.error(err))
    }, [])
    return (<>
        <ul>
            {courses && courses.filter((el, index) => (index >= (page * courseCount - courseCount) && index < (page * courseCount))).map((course, index) => <CourseInList {...course} key={course.id} />)}
        </ul>
        <Pagination count={Math.ceil(courses.length / courseCount)} page={page} />
    </>
    );
}

export default CoursesList;