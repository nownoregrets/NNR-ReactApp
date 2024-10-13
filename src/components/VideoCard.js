import React, { useState, useEffect } from 'react';

const VideoCard = (props) => {
    // Title Trim after 60 characters
    const title =
        props.title.length > 60
            ? props.title.substring(0, 60) + "..."
            : props.title;

    // Update Card Width with Screen Width
    const [cardStyle, setCardStyle] = useState({ width: "23rem" })
    const updatedCardStyle = () => {
        if (window.innerWidth <= 768) {
            setCardStyle({ width: "25rem" });
        } else if (window.innerWidth <= 990) {
            setCardStyle({ width: "20rem" });
        } else if (window.innerWidth <= 1124) {
            setCardStyle({ width: "18rem" });
        } else {
            setCardStyle({ width: "23rem" });
        }
    };

    useEffect(() => {
        updatedCardStyle()
        window.addEventListener("resize", updatedCardStyle)
        return () => {
            window.removeEventListener("resize", updatedCardStyle)
        }
    }, [])

    return (
        <div className="card col-sm-3 mt-3" style={cardStyle}>

            <img src={props.thumbnail} style={{ borderRadius: ".5vw" }} className="card-img-top my-2" alt="Thumbnail" />

            <div className="card-body">

                <h5 className="card-title">{title}</h5>

                <div className="d-flex justify-content-evenly">

                    <a href={props.videoURL} className="btn btn-primary me-2" style={{ borderRadius: '0.5vw' }}>Watch Video</a>
                    <a href="https://www.youtube.com/@nownoregrets/" className="btn btn-secondary" style={{ borderRadius: '0.5vw' }}>View Channel</a>

                </div>
            </div>
        </div>
    );
}

export default VideoCard;
