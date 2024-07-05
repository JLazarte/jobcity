import React from "react";
import styles from "./list.module.css"

export default function List(props: any) {
	return <div className={styles.list} style={props.style}>{props.children}</div>
}