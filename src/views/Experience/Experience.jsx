import { render } from "@testing-library/react";
import React from "react";
import "./Experience.css";

function TimeLineItem(props){
  return (
    <div
      onClick={() => {
        props.setActiveTitle(props.title);
      }}
    className="timeline-item">
          <h1>{props.title}</h1>

    </div>
  );
}



export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = React.useState('BLANK');


  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem 
          title="connosieur"
          setActiveTitle={setActiveTitle}
          ></TimeLineItem>
          <TimeLineItem 
          title="connosieur" 
          setActiveTitle={setActiveTitle}
          ></TimeLineItem>
          <TimeLineItem 
          title="connosieur" 
          setActiveTitle={setActiveTitle}
          ></TimeLineItem>  
        </div>
      

        <div className="highlight-background">
          <h1>{activeTitle}</h1>
        </div>
      </div>
    </div>
  );
}
