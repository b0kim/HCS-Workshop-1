import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Link} from "react-router-dom";



function Button() {
    const [clicked, setClicked] = React.useState(false);
    if (clicked) {
        <Link to={{ pathname: "https://docs.google.com/document/d/1LqEdW1rjqknsli7td638ZeanPa48O-mTmWmu0S1f1h0/edit?usp=sharing" }}></Link>
    }
    else {    
    
        return (
        <div className="Button">
            <button>Resume</button>
        </div>
            );
        }
}

export default Button;
