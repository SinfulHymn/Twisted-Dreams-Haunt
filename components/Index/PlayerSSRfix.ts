import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("./ReactPlayer"), {
  ssr: false,
});

export default ReactPlayer;
