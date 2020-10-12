import React from "react";
import "./Education.css";
import CoolPic from "../../assets/h.jpg";

export default function EducationScreen() {
    return (
      <div className="screen-background">
        <div className="edu-background">
          <div className="edu-item">
            <img src={CoolPic} className="edu-picture" /> 
          </div>
          <div className="edu-item">
            Went to small liberal arts college in Boston
          </div>
        </div>
      </div>
    );
  }
  