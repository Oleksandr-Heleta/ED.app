import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

function VideoPlayer({ url, muted, autoPlay, play }) {
    const videoRef = useRef(null);

    const handlePlay = () => {
        const currentTime = videoRef.current.currentTime;
        console.log(url);
        localStorage.setItem(url, currentTime);
    }

    useEffect(() => {
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(videoRef.current);
        } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
            videoRef.current.src = url;
        }
        videoRef.current.currentTime = localStorage.getItem(url) || 0;
        if (play) {
            videoRef.current.pause();
            console.log(play);
        }
    }, [url, play]);

    return (
        <video ref={videoRef} controls muted={muted} autoPlay={autoPlay} onPlay={handlePlay} />
    );
}

export default VideoPlayer;