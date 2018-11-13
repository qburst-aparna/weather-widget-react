import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { actions } from '../actions';
import Widget from '../components/widget';
import WeatherForm from '../components/WeatherForm';
import { directions } from '../helpers/data';

const mapDispatchToProps = {
    fetchWeather: actions.fetchWeatherData,
    updateTitle: actions.updateTitle,
    changeDegreeOfTemp: actions.changeDegreeOfTemp,
    toggleWindVisibility: actions.toggleWindVisibility
};

const mapStateToProps = (state) => ({
    temperature: state.temperature,
    wind: state.wind,
    title: state.title,
    degreeOfTemp: state.degreeOfTemp,
    showWind: state.showWind,
    fetchSuccess: state.fetchSuccess });

class WeatherWidget extends React.Component {
  componentDidMount() {
    this.props.fetchWeather();
  }
  
  convertTemperatureToSelectedDegree = () => {
    if(this.props.temperature > 0) {
        const temp = this.props.temperature - 273.15;
        if(this.props.degreeOfTemp === 'c') {
         return `${Math.round(temp)}°`;
        }
        return `${Math.round(temp * 1.8 +32)}°`;
    
    }  
    return this.props.temperature;
  }

  convertWindDataToDisplay = () => {
    const { speed, deg } = this.props.wind;
    const windData = {direction: '', speed: ''};
    if(speed && deg) {
        const val = Math.round((deg % 360)/ 22.5,0);
        windData.direction = directions[val-1];
        windData.speed = `${Math.round(speed * 3.6)}km/h`
    }
    
    return windData;
  }
  render() {
    
    return ( this.props.fetchSuccess ? (<div>
        <hr/>
        <div className="row smoky-bg">
        <div className ="col-md-6 col-sm-6 border-right margin-35">
         <WeatherForm {...this.props}/>
        </div>
        <div className ="col-md-5 col-sm-6 margin-44">
         <Widget title={this.props.title} wind={this.convertWindDataToDisplay()} temperature={this.convertTemperatureToSelectedDegree()} showWind={this.props.showWind}/>
        </div>
        </div>
        </div>
    ) : (<div className="loader"/>)
        
    );
  }
}

WeatherWidget.propTypes = {
    updateTitle: PropTypes.func,
    changeDegreeOfTemp: PropTypes.func,
    toggleWindVisibility: PropTypes.func,
    title: PropTypes.string,
    degreeOfTemp: PropTypes.string,
    showWind: PropTypes.bool,
    fetchWeather: PropTypes.func,
    wind: PropTypes.object,
    temperature: PropTypes.number,
    fetchSuccess: PropTypes.bool
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherWidget);
