import React from "react";
import "./Card5.css";
import Avatar from "../Avatar5/Avatar";
import Detail from "../Detail/Details";

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <Avatar img={props.img} />
            </div>
            <div className="bottom">
                <Detail info={props.tel} />
                <Detail info={props.email} />
            </div>
        </div>
    );
}

export default Card;
