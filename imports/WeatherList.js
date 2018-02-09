import React from 'react';
import WeatherItem1 from './WeatherItem1';
import WeatherItems from './WeatherItems';


export default class WeatherList extends React.Component{

	render(){

		var now = new Date();
		var daynumber = now.getDay();

		


		if (this.props.templist.length > 0) {
			return (
				<div className="allItem">
					<div className="Item1">

						<WeatherItem1 dayone = {this.props.templist[0].temp.day}
										city = {this.props.city}
										dayoneicon = {this.props.templist[0].weather[0].icon}
										 />
					</div>
					
					<div className="Items">
			   			{
    				this.props.templist.map(function(ele, i) {					 
    							if (i != 0 && i != 7) {
    							return <WeatherItems 
    								daysmax = {ele.temp.max}
    								daysmin = {ele.temp.min}
    								keys = {i} 
    								daysicon = {ele.weather[0].icon}
    								daysletter = {daynumber+i}
    								/>
    							}
    							
    						})
    					}

    				</div>
    			</div>

				)
			}



		else {
			return null
			}

	
	}


}