import React from "react";
import styles from "./card.module.css"
import { Label } from "@/components/atoms/label";

export default function Card(props: any) {
	return (<div className={styles.card}>
		<Label>{props.label}</Label>
		<p>{props.description}</p>
	</div>);
}