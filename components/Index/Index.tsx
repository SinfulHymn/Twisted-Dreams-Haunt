import React from "react";
import VideoHero from "./VideoHero";
import { useRouter } from "next/router";

const Index = () => {
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <VideoHero />
            {/* <Content /> */}
        </div>
    );
}

export default Index;