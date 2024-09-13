import React from "react";
import styles from "../css/emptyComponent.module.css";
const EmptyComponent = ({ text }) => {
    return (
        <div className={styles.emptyComponent}>
            <div className={styles.emptyComponent__containerText}>
                <p className={styles.emptyComponent__text}>{text}</p>
            </div>
        </div>
    );
};

export default EmptyComponent;
