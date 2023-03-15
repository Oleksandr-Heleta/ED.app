import "./scss/style.scss";
import bootstrap from 'bootstrap';
import { getCourses, getCourse } from "./script/Api";
import RenderCourses from "./script/RenderCourses";
import RenderCourse from "./script/RenderCourse"

const root = document.getElementById('root');


const RenderApp = function (element) {
    getCourses().then((obj) => {
        element.innerHTML = RenderCourses(obj.courses);
    })

    root.addEventListener('click', openCourse)
    function openCourse({ target }) {
        const section = target.closest('.courses_item');

        if (section) {
            const courseId = section.id;
            getCourse(courseId).then(course => {
                element.innerHTML = RenderCourse(course);
            })

        }
    }
}
RenderApp(root)