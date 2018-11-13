import React from 'react';
import PropTypes from 'prop-types';

 class WeatherForm extends React.Component {
     constructor(props) {
         super(props);
         this.state = {title: props.title, degree: props.degreeOfTemp, showWind: props.showWind};
     }
    

    handleTitleChange = (event) => {
      this.setState({ title: event.target.value });
      this.props.updateTitle(event.target.value);
    }
  
    handleDegreeChange = (event) => {
        let degree = "";
        if(event.target.value === "on") {
            if(event.target.id === "celecius") {
                degree = "c";
                this.setState({ degree: degree});
            } else {
                degree = "f";
                this.setState({ degree: degree});
            }
            this.props.changeDegreeOfTemp(degree);
        }
                
    }

    handleWindVisibility = (event) => {   
        let windVisible = true;
        if(event.target.value === "on") {
            if(event.target.id === "on") {
                windVisible = true;
                this.setState({ showWind: true});
            } else {
                windVisible = false;
                this.setState({ showWind: false});
            }
            this.props.toggleWindVisibility(windVisible);
        }
    }
  
    render() {
       
      return (
        <form onSubmit={this.handleSubmit} className="ml-5 mr-5">
            <div className="form-group">
                <label className="control-label" htmlFor="title">Title</label>
                <input type="text" value={this.state.title} className="form-control" id="title" onChange={this.handleTitleChange} placeholder="Title of widget"/>
            </div>
            <div className="form-group"> 
            <div> 
            <label className="control-label" >Temperature</label> 
            </div>         
                <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" id="celecius" name="celecius" checked = {this.state.degree === 'c'} onClick={this.handleDegreeChange}/>
                    <label className="custom-control-label" htmlFor="celecius">°C</label>
                </div>

                <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" id="farenheit" name="farenheit" checked = {this.state.degree === 'f'} onClick={this.handleDegreeChange}/>
                    <label className="custom-control-label" htmlFor="farenheit">°F</label>
                </div>          
            </div>    
            <div className="form-group">
            <div> 
            <label className="control-label">Wind</label> 
            </div> 
            <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" id="on" name="onRadio" checked= {this.state.showWind} onClick={this.handleWindVisibility}/>
                    <label className="custom-control-label" htmlFor="on">On</label>
                </div>

                <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" id="off" name="offRadio" checked= {!this.state.showWind} onClick={this.handleWindVisibility}/>
                    <label className="custom-control-label" htmlFor="off">Off</label>
                </div>          
            </div>      
        </form>
      );
    }
  }

  WeatherForm.propTypes = {
    saveSuccess: PropTypes.bool,
    updateTitle: PropTypes.func,
    changeDegreeOfTemp: PropTypes.func,
    toggleWindVisibility: PropTypes.func,
    title: PropTypes.string,
    degreeOfTemp: PropTypes.string,
    showWind: PropTypes.bool
};
  export default WeatherForm;