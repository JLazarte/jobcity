import React from "react";
import styles from "./code.module.css"

export default function Code(props: any) {
    return <div style={props.style} className={styles.code}><code>{props.children}</code></div>
}