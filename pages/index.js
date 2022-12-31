import styles from "../styles/Home.module.scss";

export default function Home() {
    return (
        <div className={styles.columnWrapper}>
            <div className={styles.columnLeft}>
                <h1>Food Cost Calculator</h1>
            </div>

            <div className={styles.columnRight}>
                <img src="/images/cost-calculator.jpg" />
            </div>
        </div>
    );
}
