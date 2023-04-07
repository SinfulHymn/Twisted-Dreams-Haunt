import React, { useState, useEffect, useRef } from 'react';

type Props = {
  className?: string;
  videoSrc: string;
};

const AutoPlaySilentVideo: React.FC<Props> = ({ className, videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = isMuted;
    }
  }, [isMuted]);

  return (
    <video
      className={className}
      ref={videoRef}
      loop
      autoPlay
      muted={isMuted}
      playsInline
      onLoadedMetadata={() => setIsMuted(true)}
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
};

export default AutoPlaySilentVideo;
