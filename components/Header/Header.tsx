import React from "react";
import Navbar from "./Navbar";
type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <header className="flex flex-col min-w-full">
            <Navbar />

        </header>
    );
}

export default Layout;