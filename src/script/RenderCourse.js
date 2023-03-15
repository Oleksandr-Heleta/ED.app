import { course } from "./course";
import RenderLesson from "./RenderLesson";


const RenderCourse = function (course) {

    const { id, title, description, previewImageLink, rating, lessons } = course;
    const lessonsHtml = lessons.map((lesson) => RenderLesson(lesson));
    const video = course.meta.courseVideoPreview.link;

    return `<section id=${id} class="course container mb-3">
        <div class="course_video col-md-4">
            <video muted controls preload="auto" >
                <source
                    src="${video}"
                    type="application/x-mpegURL">
            </video>
            
        </div>
        <div class="course_information col-md-8">
            <h2>${title}</h2>
            <p>${description}</p>
        </div>
        <div class="course_list col-md-12">
            ${lessonsHtml}
        </div>
    </section>`;

}

export default RenderCourse;