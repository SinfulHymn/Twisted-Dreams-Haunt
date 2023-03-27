import dynamic from "next/dynamic";

const MapSSRfix = dynamic(() => import("@components/global/Map/MapComponent"), {
  ssr: false,
});

export default MapSSRfix;
