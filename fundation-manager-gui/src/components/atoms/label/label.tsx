import React from "react";
import styles from "./label.module.css"

export default function Label(props: any) {
    return <h2 className={styles.label}>{props.children}</h2>
}