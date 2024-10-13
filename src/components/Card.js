import React, { useState, useEffect } from 'react';
import "../App.css";

const Card = (props) => {
  // Title Trim after 60 characters
  const title =
    props.title.length > 60
      ? props.title.substring(0, 60) + "..."
      : props.title;
  
  // Description Trim after 160 chars
  const description =
    props.description.length > 160
      ? props.description.substring(0, 160) + "..."
      : props.description;

  // Styles for the badge
  const badgeStyle = {
    backgroundColor: "#f0f0f0",
    color: "#333",
    padding: "5px 10px",
    borderRadius: "12px",
    fontSize: "0.9rem",
    textTransform: "uppercase",
    border: "1px solid #ddd",
    display: "inline-block",
    marginRight: "10px",
  };

  const [cardStyle, setCardStyle] = useState({ flex: '1 1 100%' });
  const [borderRadius, setBorderRadius] = useState({ borderRadius: "4vw 4vw 6vw 2vw" });

    // Function to update both card style and border radius
    const updateStyles = () => {
      // Update card style
      if (window.innerWidth <= 768) {
        setCardStyle({ flex: '1 1 100%' }); // 1 card per row
        setBorderRadius("13vw 9vw 8vw 9vw"); // Apply custom border-radius for <= 768px
      } else if (window.innerWidth <= 1024) {
        setCardStyle({ flex: '1 1 50%' }); // 2 cards per row
        setBorderRadius("4vw 4vw 6vw 2vw"); // Reset to default
      } else {
        setCardStyle({ flex: '1 1 33.33%' }); // Default: 3 cards per row
        setBorderRadius("4vw 4vw 6vw 2vw"); // Reset to default
      }
    };
  
    useEffect(() => {
      // Set initial styles
      updateStyles();
  
      // Add resize event listener
      window.addEventListener('resize', updateStyles);
  
      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener('resize', updateStyles);
      };
    }, []);

  return (
    <div className="col-sm-4 mt-3" style={cardStyle}>
      <div className="card bg-light" style={{ borderRadius }}>
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>

          {/* Badge */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="badge" style={badgeStyle}>
              {props.date}
            </span>
            {/* Button */}
            <a href="/" className="card-btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
