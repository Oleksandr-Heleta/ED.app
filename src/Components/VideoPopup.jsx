

function VideoPopup({ lesson, children, onClick }) {

    const { title, order } = lesson;
    return (
        <div className="video-popup">
            <div className="popup-overlay"></div>
            <div className="popup-content">
                <p className="popup-info">{order}. {title}</p>
                <button className="close-popup" onClick={onClick}>X</button>
                {children}
                <p className="popup-manual">Control speed: ArrowRight +0.5; ArrowLeft -0.5.</p>
            </div>
        </div>)
}

export default VideoPopup;
