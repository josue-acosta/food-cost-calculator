import Link from "next/link";

import global from "../styles/Globals.module.scss";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
    return (
        <div className={`${global.wrapper} ${styles.container}`}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">Recipes</Link>
                </li>
                <li>
                    <Link href="/suppliers">Suppliers</Link>
                </li>
                <li>
                    <Link href="/">Ingredients</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
