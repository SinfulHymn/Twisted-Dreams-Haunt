import React, {useRef, useEffect} from "react"

export default function AutoPlaySilentVideo({className, videoSrc}) {
    const videoRef = useRef(undefined);
    useEffect(() => {
        videoRef.current.defaultMuted = true;
    })
    return (
        <video
            className={className}
            ref={videoRef}
            loop
            autoPlay
            muted
            playsInline>
            <source src={videoSrc} type="video/mp4"/>
        </video>
    );
}
