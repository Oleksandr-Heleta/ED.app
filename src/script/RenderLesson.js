const RenderLesson = function ({
    id,
    title,
    duration,
    order,
    type,
    status,
    link,
    previewImageLink,
    meta }) {
    return ` <section id=${id} class="card">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${previewImageLink}/${order}.webp" class="img-fluid rounded-start" alt="${title}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text"><small class="text-muted">status ${status} | durationus ${duration} | type ${type}</small></p>
                        </div>
                    </div>
                </div>
            </section>`
}

export default RenderLesson;