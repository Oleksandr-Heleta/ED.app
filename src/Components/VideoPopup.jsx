

function VideoPopup({ lesson, children, onClick }) {

    const { title, order } = lesson;
    return (
        <div className="video-popup">
            <div className="popup-overlay">{order}. {title}</div>
            <div className="popup-content">
                <p className="popup_info">{order}. {title}</p>
                <button className="close-popup" onClick={onClick}>X</button>
                {children}
            </div>
        </div>)
}

export default VideoPopup;