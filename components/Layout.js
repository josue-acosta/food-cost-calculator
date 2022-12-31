import Navbar from "./navbar";

import global from "../styles/Globals.module.scss";

export default function Layout({ children }) {
    return (
        <div className={`${global.reset}`}>
            <Navbar />
            <main className={`${global.wrapper} ${global.layout}`}>
                {children}
            </main>
        </div>
    );
}
