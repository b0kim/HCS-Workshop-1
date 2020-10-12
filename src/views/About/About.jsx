import React from "react";
import "./About.css";
import CutePic from "../../assets/fine.jpg";
import Button from "../../Button";

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={CutePic} className="intro-picture" /> 
        </div>
        <div className="intro-item">
          Howdy, I'm Brandon from Massachusetts
        </div>
      </div>

      <Button/>
    </div>

    
  );
}

