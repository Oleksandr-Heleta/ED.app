import "./scss/style.scss";
import bootstrap from 'bootstrap';
// import getCourses from "./script/Api";
import RenderCourses from "./script/RenderCourses";

const root = document.getElementById('root');


const RenderApp = function (element) {
    element.innerHTML = RenderCourses();
    root.addEventListener('click', openCourse)
    function openCourse({ target }) {
        const section = target.closest('section');
        if (section) {
            const courseId = section.getAtribute('id');
            element.innerHTML = RenderCourse(courseId);
        }
    }
}
RenderApp(root)