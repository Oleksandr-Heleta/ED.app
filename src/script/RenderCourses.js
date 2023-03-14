import { courses } from "./courses";

const RenderCourses = function () {
    const coursesHtml = courses.reduce((html, course) => {
        const { id, title, description, previewImageLink, rating } = course;
        return html += ` <section id=${id} class="card mb-3" style="max-width: 780px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src='${previewImageLink}/cover.webp' class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                    <p class="card-text"><small class="text-muted">${rating}</small></p>
                </div>
            </div>
        </div>
    </section>`
    }, '');
    return coursesHtml;
}
export default RenderCourses;