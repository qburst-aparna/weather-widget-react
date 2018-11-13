import React from "react";
import PropTypes from 'prop-types';

const weatherImg = require("../assets/weather-widget-01.png");

const Widget= (props) => {

    return (
        <div className="white-bg">
         <h4>{props.title}</h4>
         <br/>
         <div className ="row">
            <div className ="col-md-5 col-sm-6">
              <img src={weatherImg}/>
            </div>
         <div className ="col-md-5 col-sm-6">
         <div className ="row">Sydney</div>
         <div className ="row widget-temp">{props.temperature}</div>
         <div className ="row small-font">{props.showWind ? (<div><span className="bold-text">Wind  </span><span>{` ${props.wind.direction} ${props.wind.speed}`}</span></div>) : null}</div>
         <br/>
         <br/>
        </div>
  </div>
        </div>
    );

}

Widget.propTypes = {
    temperature: PropTypes.string,
    wind: PropTypes.object,
    title: PropTypes.string,
    showWind: PropTypes.bool
};

export default Widget;