import React from "react";
import style from "./appointment.module.css";
type Props = {
  name: string;
  engineerName: string;
  startTime: string;
  endTime: string;
  costs: {
    id: number;
    attributes: { price: number; duration: number };
  }[];
};

export default function AppoinmentCard(props: Props) {
  return (
    <div className={style.cardContainer}>
      <div className={style.InfoRow}>
        <p> {props.name}</p>
        <p> {props.engineerName}</p>
      </div>
      <div className={style.InfoRow}>
        <p> {props.startTime}</p>
        <p> {props.endTime}</p>
      </div>
      <div className={style.InfoRow}>
        <p> {props.costs[0].attributes.price}</p>
        <p> {props.costs[0].attributes.duration}</p>
      </div>
    </div>
  );
}
