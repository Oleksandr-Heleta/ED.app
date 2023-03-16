import { course } from "./course";
import RenderLesson from "./RenderLesson";


const RenderCourse = function (course) {

    const { id, title, description, previewImageLink, rating, lessons } = course;
    const lessonsHtml = lessons.map((lesson) => RenderLesson(lesson));
    const video = course.meta.courseVideoPreview.link;

    return `<section id=${id} class="course container ">
        <div class="course_video ">
            <video muted controls preload="auto" >
                <source
                    src="${video}"
                    type="application/x-mpegURL">
            </video>
            
        </div>
        <div class="course_information">
            <h2>${title}</h2>
            <p>${description}</p>
        </div>
        <div class="course_list">
            ${lessonsHtml}
        </div>
    </section>`;

}

export default RenderCourse;