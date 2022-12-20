import React, { useRef, useEffect } from "react";

type Props = {
  className?: string;
  videoSrc: string;
};

export default function AutoPlaySilentVideo({ className, videoSrc }: Props) {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });
  return (
    <video className={className} ref={videoRef} loop autoPlay muted playsInline>
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}
