import React from "react";
import "./Card2.css";

function Card() {
    return (
        <div className="card">
            <div className="top">
                <h2 className="name">Beyonce</h2>
                <img
                    className="circle-img"
                    src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
                    alt="avatar_img"
                />
            </div>
            <div className="bottom">
                <p className="info">+123 456 789</p>
                <p className="info">b@beyonce.com</p>
            </div>
        </div>
    );
}

export default Card;
