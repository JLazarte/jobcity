import React from "react";
import styles from "./flex.module.css"

export default function Label(props: any) {
    return <div
        className={[
            styles.flex,
            props.className || "",
            props.even ? styles.flexEven : ""
        ].join(" ")}
        style={props.style}>{props.children}</div>
}