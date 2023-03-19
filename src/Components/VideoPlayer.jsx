import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

function VideoPlayer({ url, muted, autoPlay, play }) {
    const videoRef = useRef(null);

    const handlePlay = () => {
        const currentTime = videoRef.current.currentTime;
        console.log(url);
        localStorage.setItem(url, currentTime);
    }

    const handleKey = (event) => {
        const char = event.key;
        let speed = videoRef.current.playbackRate;
        switch (char) {
            case 'ArrowRight':
                videoRef.current.playbackRate = (speed < 2) ? (speed + 0.5) : speed;
                break;
            case 'ArrowLeft':
                videoRef.current.playbackRate = (speed > 0) ? (speed - 0.5) : speed;
                break;

            default:
                break;
        }
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
        }
    }, [url, play]);

    return (
        <video ref={videoRef} controls muted={muted} autoPlay={autoPlay} onPause={handlePlay} onKeyDown={handleKey} />
    );
}

export default VideoPlayer;
