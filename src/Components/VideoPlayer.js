import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

function VideoPlayer({ url }) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(videoRef.current);
        } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
            videoRef.current.src = url;
        }
    }, [url]);

    return (
        <video ref={videoRef} controls />
    );
}

export default VideoPlayer;