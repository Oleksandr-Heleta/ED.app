
import React from 'react';
import { useState, useEffect } from "react";

import { getCourses } from "../Components/Api";
import CourseInList from "../Components/CourseInList";


function CoursesList() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses().then(obj => { console.log(obj); setCourses(obj.courses) }).catch(err => console.error(err))
    }, [])
    return (
        <div>
            {courses && courses.map((course, index) => <CourseInList {...course} key={course.id} />)}
        </div>

    );
}

export default CoursesList;